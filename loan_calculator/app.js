// UI Vars
// form vars
const amount =  document.getElementById('amount');
const interestRate = document.getElementById('interest');
const yearsToRepay = document.getElementById('years');
const form =document.getElementById('loan-form');
// loading
const loadingSpinner = document.getElementById('loading');
const results = document.getElementById('results');
// result vars
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
loadEventListeners();


function loadEventListeners(){
  // Listen for submit
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // hide results
    results.style.display = 'none';
    // show loader
    loadingSpinner.style.display = 'block';

    // hide loader and display results
    setTimeout(function()
    {
      calculateResults();
      loadingSpinner.style.display = 'none';
      results.style.display = 'block';
    },2000);

    //calculateResults();
  });
}



function calculateResults(){
  monthlyPayment.value = 0;
  totalPayment.value = 0;
  totalInterest.value = 0;

  const principal = parseFloat(amount.value);
  const calculatedInterest = ((parseFloat(interestRate.value)/100)/12);
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x  = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1) ;

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
  }else{
    showError("Please check your numbers.");
  }
}

function showError(error){
  // Create error div
  const errorDiv = document.createElement('div');
  errorDiv.className = "alert alert-danger";

  // get dom parents
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // create TextNode and append to div
  errorTextNode = document.createTextNode(error);
  errorDiv.appendChild(errorTextNode);

  card.insertBefore(errorDiv, heading);

  // clear error after timeout = 3s
  window.setTimeout(function(){document.querySelector('.alert').remove()}, 3000);

}

function renderResults(){

}