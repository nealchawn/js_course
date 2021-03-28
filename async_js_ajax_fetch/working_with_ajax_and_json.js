const customerBtn = document.getElementById('button1');
const customersBtn = document.getElementById('button2');

const customerDiv = document.getElementById('customer');
const customersDiv = document.getElementById('customers');

customerBtn.addEventListener('click', loadCustomer);

customersBtn.addEventListener('click', loadCustomers);

function loadCustomer(e){
  e.preventDefault();

  const xmhr = new XMLHttpRequest();
  xmhr.open('get','./customer.json', true);
  xmhr.onload = function(){
    if(this.status == 200){
      let customer;
      customer = JSON.parse(this.responseText);
      customerDiv.innerHTML = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>NAME: ${customer.name}</li>
        <li>COMPANY: ${customer.company}</li>
        <li>PHONE: ${customer.phone}</li>
      </ul>
      `;
    }
  };
  xmhr.send();
}

function loadCustomers(e){
  e.preventDefault();

  const xmhr = new XMLHttpRequest();
  xmhr.open('get','./customers.json', true);
  xmhr.onload = function(){
    if(this.status == 200){
      let customers, output = "";
      customers = JSON.parse(this.responseText);

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>NAME: ${customer.name}</li>
          <li>COMPANY: ${customer.company}</li>
          <li>PHONE: ${customer.phone}</li>
        </ul>
        `;
      });

      customersDiv.innerHTML = output;
    }
  };
  xmhr.send();
}