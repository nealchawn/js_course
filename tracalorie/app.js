// Storage Controller

// Item Controller
const ItemCtrl = (function(){
  let idGenny = nextId();
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 120, name: "Steak", calories: 1200},
      {id: 112, name: "Eggs", calories: 300},
      {id: 223, name: "Toast", calories: 500}
    ], // items in state / table
    currentItem: null, // item to be updated in form
    totalCalories: 0 
  }

  function computeTotalCalories(){
    data.totalCalories = 0;
    for(item of data.items){
      data.totalCalories += parseInt(item.calories);
    }
    return data.totalCalories;
  }

  function itemIndex(itemID = 0){
    let arrayIndex = null;
    data.items.forEach( (item, index) => {
      if(item.id === itemID){
        arrayIndex = index;
      }
    });

    //console.log(arrayIndex);
    return arrayIndex;
  }

  function* nextId(){
    let index = 0;
    while(true){
      yield index++;
    }
  }

  
  return {
    deleteItem: function(){
      let arrayIndex = itemIndex(data.currentItem);
      this.resetEditItem();
      if(!isNaN(arrayIndex)){
        return data.items.splice(arrayIndex,1);
      }
    },
    getTotalCalories: function(){return computeTotalCalories();},
    updateItem: function(name, calories){
      let arrayIndex = itemIndex(data.currentItem);
      data.items[arrayIndex].name = name;
      data.items[arrayIndex].calories = parseInt(calories);
      this.resetEditItem();
    },
    getItem: function(id){
      let arrayIndex = null;
      arrayIndex = itemIndex(id);
      //console.log(id);
      if(!isNaN(arrayIndex)){
        return data.items[arrayIndex];
      }
    },
    createItem: function(name, calories){
      let item = new Item(idGenny.next().value, name, parseInt(calories));
      data.items.push(item);
    },
    setEditItem: function(itemId){data.currentItem = itemId;},
    resetEditItem: function(){
      //console.log("Previous Item: ",data.currentItem);
      data.currentItem = null; 
      //console.log("Current Item: ",data.currentItem);
    },
    getItems: function(){return data.items},
    // to test
    logData: function(){
      return data;
    },

    // to test
    testIndex: function(){
      console.log(idGenny.next().value);
    }
  }

})();

// UI Controller
const UICtrl = (function(){
  // const UISelectors = {
  //   itemList: '#item-list',
  //   totalCalories: '.total-calories'
  // }

  // const item_list = document.querySelector(UISelectors.itemList);
  // const total_calories = document.querySelector(UISelectors.totalCalories);


  const UISelectors = {
    item_list: document.querySelector("#item-list"),
    total_calories: document.querySelector(".total-calories"),
    add_item_btn: document.querySelector('.add-btn'),
    update_item_btn: document.querySelector('.update-btn'),
    delete_item_btn: document.querySelector('.delete-btn'),
    back_item_btn: document.querySelector('.back-btn'),
    item_name_input: document.querySelector('#item-name'),
    item_calories_input: document.querySelector('#item-calories')
  }

  return{

    renderItems: function(items){
      let html = "";
      items.forEach((item) =>{
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong><em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });
      // item_list.innerHTML = html;
      UISelectors.item_list.innerHTML = html;
    },

    renderTotalCalories: function(totalCalories){
      UISelectors.total_calories.innerText = totalCalories;
    },
    ShowEditState(item){
      UISelectors.add_item_btn.style.display = 'none';

      UISelectors.update_item_btn.style.display = '';
      UISelectors.delete_item_btn.style.display = '';
      UISelectors.back_item_btn.style.display = '';
      UISelectors.item_name_input.value = item.name;
      UISelectors.item_calories_input.value = parseInt(item.calories);
    },
    showNewState(){
      // clear Input
      this.clearInput();
      UISelectors.add_item_btn.style.display = 'block';

      UISelectors.update_item_btn.style.display = 'none';
      UISelectors.delete_item_btn.style.display = 'none';
      UISelectors.back_item_btn.style.display = 'none';
    },
    getUIselectors: () => UISelectors,
    clearInput: () =>{
      UISelectors.item_name_input.value = "";
      UISelectors.item_calories_input.value = 0;
    },
    hideList: () => (UISelectors.item_list.style.display = 'none'),
    showList: () => (UISelectors.item_list.style.display = 'block')


  }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){

  function loadEventListeners(){
    const UISelectors = UICtrl.getUIselectors();
    // add item event
    UISelectors.add_item_btn.addEventListener('click', addItemToList(UISelectors));
    UISelectors.item_list.addEventListener('click', editItem);
    UISelectors.update_item_btn.addEventListener('click', function(e){
      e.preventDefault();
      updateItem(UISelectors);
    });
    UISelectors.delete_item_btn.addEventListener('click', (e)=>{
      e.preventDefault();
      ItemCtrl.deleteItem();
      refreshUI();
    });
    UISelectors.back_item_btn.addEventListener('click', (e)=>{
      e.preventDefault();
      refreshUI();
    });
  }

  function editItem(e){
    e.preventDefault();
    
    if(e.target.tagName == "I"){
      item_id_string = e.target.parentElement.parentElement.id;
      item_id = parseInt(item_id_string.match(/-(\d+)/)[1]);
      // set Itm.data current itemID
      //debugger
      ItemCtrl.setEditItem(item_id);
      let item = ItemCtrl.getItem(item_id);
      UICtrl.ShowEditState(item);
    }else{
    }
  }

  function updateItem(UISelectors){
    let name = UISelectors.item_name_input.value;
    let calories = UISelectors.item_calories_input.value;
    ItemCtrl.updateItem(name, calories);
    refreshUI();
  }

  function addItemToList(UISelectors){
    
    return(function(e){
      e.preventDefault();
      let itemName = UISelectors.item_name_input.value;
      let itemCalories = UISelectors.item_calories_input.value;
      
      if((itemName !== null && itemName !== '') && (itemCalories !== null && itemCalories !== '' && !isNaN(itemCalories))){
        ItemCtrl.createItem(itemName, parseInt(itemCalories))
        refreshUI();
        //console.log(`meal: ${itemName}, calories: ${itemCalories}`);
      }else{
        console.log("Empty!");
      }
      
    });
    
  }

  function refreshUI(){
    // reset Itm.data current itemID
    ItemCtrl.resetEditItem(); // In case house keeping isn't done internally
    let items = ItemCtrl.getItems();
    UICtrl.showNewState();
    if(items.length > 0){
      UICtrl.showList();
      UICtrl.renderItems(items);
      UICtrl.clearInput();
    }else{
      UICtrl.hideList();
    }
    UICtrl.renderTotalCalories(ItemCtrl.getTotalCalories());
  }

  // Init
  return {
    init: function(){
      console.log("Initializing App...");
      
      refreshUI();
      // load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);


document.addEventListener('DOMContentLoaded',App.init);
//App.init()