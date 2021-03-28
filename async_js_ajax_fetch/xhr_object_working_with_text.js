document.getElementById('button').addEventListener('click', loadData);

let msg = document.getElementById('output');

function loadData(){
  // create xhr object
  //const xmlHttp
  const xhr = new XMLHttpRequest();

  // OPEN

  xhr.open("get", "./data.txt", true);
  // xhr.open("get", "http://numbersapi.com/42", true);
  console.log("XHR State: ", xhr.readyState);
  // before .onload >> onready state change

  // optional spinners
  xhr.onprogress = function(){
    console.log("XHR onprogress State: ", xhr.readyState);
  }


  // xhr.onreadystatechange = function(){
  //   // this == xhr
  //   console.log("XHR State: ", this.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(xhr.response);
  //   }
  // };

  xhr.onload = function(){
    // this == xhr
    //console.log("XHR State: ", this.readyState);
    if(this.status === 200){
      let response_text = this.responseText;
      msg.innerText = response_text;
    }
  };

  xhr.onerror = ()=>(console.log("request error"));
  xhr.send();

  /*
  Ready state values:
  0: request not initialized
  1: server connection established
  2: request received
  3: processing request
  4: request finished and response ready
  */

  /*
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://bar.other/resources/post-here/');
    xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    xhr.setRequestHeader('Content-Type', 'application/xml');
    xhr.onreadystatechange = handler;
    xhr.send('<person><name>Arun</name></person>');
  */
}