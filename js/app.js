// variable declaration
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const delivaryCost = document.getElementById('delivary-cost');
const previousTotalCost = document.getElementById('total-price');
const total = document.getElementById('total');
const promoCode = document.getElementById('promo-code')

// common function
function updateTotallPrice() {
   const totalPrice = document.getElementById('total-price');
   totalPrice.innerText = 1299 + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(delivaryCost.innerText);
}
function updateTotall() {
   total.innerText = previousTotalCost.innerText
}

// Handle memory option price
document.getElementById('8-GB-btn').addEventListener('click', function () {
   memoryCost.innerText = 0
   updateTotallPrice();
   updateTotall();
})
document.getElementById('16-GB-btn').addEventListener('click', function () {
   memoryCost.innerText = 180;
   updateTotallPrice();
   updateTotall()
})

// handle storage option price
document.getElementById('256-GB-btn').addEventListener('click', function () {
   storageCost.innerText = 0;
   updateTotallPrice();
   updateTotall()
})
document.getElementById('512-GB-btn').addEventListener('click', function () {
   storageCost.innerText = 100;
   updateTotallPrice();
   updateTotall()
})
document.getElementById('1TB-btn').addEventListener('click', function () {
   storageCost.innerText = 180;
   updateTotallPrice();
   updateTotall()
})

// handle delivary option cost
document.getElementById('free-delivary-btn').addEventListener('click', function () {
   delivaryCost.innerText = 0;
   updateTotallPrice();
   updateTotall()
})
document.getElementById('costly-delivary-btn').addEventListener('click', function () {
   delivaryCost.innerText = 20;
   updateTotallPrice();
   updateTotall()
})

// handle promo code aplly button
document.getElementById('apply-btn').addEventListener('click', function () {
   let totalValue = total.innerText;
   const discount = parseFloat(totalValue) * .2;
   if (promoCode.value === 'stevekaku') {
      total.innerText = parseFloat(totalValue) - discount;
   }
   promoCode.value = '';
})