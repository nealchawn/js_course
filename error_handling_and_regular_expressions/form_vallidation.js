const name = document.getElementById('name');
name.addEventListener('blur', validateName);

const zipcode = document.getElementById('zipcode');
zipcode.addEventListener('blur', validateZipcode);

const email = document.getElementById('email');
email.addEventListener('blur', validateEmail);

const phone =document.getElementById('phone');
phone.addEventListener('blur', validatePhone);

function validateName(e){
  let str = name.value;

  re = /^[a-z\sA-Z]{2,10}$/;

  if(!re.test(str)) {
    name.className = name.className.replace(/\sis-valid/,'');
    if(!name.className.includes("is-invalid")){
      name.classList.add('is-invalid');
    }
    
  } else {
    name.className = name.className.replace(/\sis-invalid/,'');
    if(!name.classList.contains('is-valid')){
      name.className += ' is-valid';
    }
  }
}

function validateZipcode(e){
  let str = zipcode.value;

  re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(str)) {
    zipcode.className = zipcode.className.replace(/\sis-valid/,'');
    if(!zipcode.className.includes("is-invalid")){
      zipcode.classList.add('is-invalid');
    }
    
  } else {
    zipcode.className = zipcode.className.replace(/\sis-invalid/,'');
    if(!zipcode.classList.contains('is-valid')){
      zipcode.className += ' is-valid';
    }
  }
}

function validateEmail(e){
  let str = email.value;
  // 5 is the longest tlda .comXX
  re = /^[^\s$]+@\w+\.(com)|(net)|(org)$/;
  //re = /^()$/;

  if(!re.test(str)) {
    email.className = email.className.replace(/\sis-valid/,'');
    if(!email.className.includes("is-invalid")){
      email.classList.add('is-invalid');
    }
    
  } else {
    email.className = email.className.replace(/\sis-invalid/,'');
    if(!email.classList.contains('is-valid')){
      email.className += ' is-valid';
    }
  }
}

function validatePhone(e){
  let str = name.value;

  re = /^[a-z\sA-Z]{2,10}$/;

  if(!re.test(str)) {
    name.className = name.className.replace(/\sis-valid/,'');
    if(!name.className.includes("is-invalid")){
      name.classList.add('is-invalid');
    }
    
  } else {
    name.className = name.className.replace(/\sis-invalid/,'');
    if(!name.classList.contains('is-valid')){
      name.className += ' is-valid';
    }
  }
}
