class easyHTTP{
  constructor(){
  }

  async get(url){
    let x = await fetch(url)
    return x.json();
  }

  async post(url, data){
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return res.json();
  }

  async put(url, data){
    let x  = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return x.json();
  }

  async delete(url){
    let x = await fetch(url, {
      method: "DELETE"
    });
    
    return x.json();
  }



}

export const http = new easyHTTP();