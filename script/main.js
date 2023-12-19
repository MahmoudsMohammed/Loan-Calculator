// UI Element
const amountEl = document.getElementById('amount'),
  interestEl = document.getElementById('interest'),
  yearsEl = document.getElementById('years'),
  submitEl = document.getElementById('submit'),
  loadEl = document.querySelector('.load'),
  outputEl = document.querySelector('.output'),
  monthlyEl = document.getElementById('monthly'),
  totalPaymentEl = document.getElementById('total-payment'),
  totalInterestEl = document.getElementById('total-interest');

// Listen for event
submitEl.addEventListener('click', (e) => {
  outputEl.style.display = 'none';
  loadEl.style.display = 'block';
  setTimeout(calcLoan, 2000);
  e.preventDefault();
});

// Function calculate and set the result

function calcLoan() {
  // Get Values From Input Fields
  const amount = +amountEl.value,
    interest = +interestEl.value,
    years = +yearsEl.value;

  // Calculate the values
  const calcInterest = interest / 100 / 12,
    calcPayments = years * 12,
    x = Math.pow(1 + calcInterest, calcPayments),
    monthly = (amount * x * calcInterest) / (x - 1);

  // Chaech
  if (isFinite(monthly)) {
    // Set values in result feilds
    monthlyEl.value = monthly.toFixed(2);
    totalPaymentEl.value = (monthly * calcPayments).toFixed(2);
    totalInterestEl.value = (monthly * calcPayments - amount).toFixed(2);
    
    // hide loader and appear result
    outputEl.style.display = 'block';
    loadEl.style.display = 'none';
  } else {
    // Show Alret
    showAletr();
  }
}

// Function display the alert
function showAletr() {
  // hide loader and result
  outputEl.style.display = 'none';
  loadEl.style.display = 'none';

  wrong.style.display = 'block';
  setTimeout(() => (wrong.style.display = 'none'), 2000);
}
