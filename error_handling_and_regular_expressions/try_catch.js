const user = {email: "tst@ts.com"}
try{
  // eval js in a string 
  let hello = "test";
  console.log(eval('hello'));

  if(!user.name){
    // throw "uggly"
    throw new Error('User has no name')
  }
}catch(e){
  console.log(e);
}finally{

}
