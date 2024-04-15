//Online Order Scripts
//Declaring Variables
 var checkboxes = document.querySelectorAll('.orderCheck');
 var amountInput = document.querySelectorAll('.amount');
 var resetButton = document.getElementById('orderReset');
 var submitButton = document.getElementById('orderSubmit');
 const placedLabel = document.getElementById('placedLabel');
  let freshCost = 2.89;
  let latteCost = 4.75; 
  let blendedCost = 5.95;
  let deluxeCost = 6.25;
  let blueberryCost = 6.20;
  let appleCost = 4.30;


  
  function calculateTotalPrice() {
    var totalCost = 0;
    // Loop through each checkbox
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            // Get the corresponding amount input
            var amountInput = document.getElementById(checkbox.id + 'Amount');
            var quantity = parseInt(amountInput.value); // Get the quantity from the amount input
            
            // Calculate price based on checkbox and quantity
            switch (checkbox.id) {
                case 'fresh':
                    totalCost += freshCost * quantity;
                    break;
                case 'latte':
                    totalCost += latteCost * quantity;
                    break;
                case 'blended':
                    totalCost += blendedCost * quantity;
                    break;
                case 'deluxe':
                    totalCost += deluxeCost * quantity;
                    break;
                case 'blueberry':
                    totalCost += blueberryCost * quantity;
                    break;
                case 'apple':
                    totalCost += appleCost * quantity;
                    break;
            }
        }
    });
     // Display total
 document.getElementById('total').textContent = "Your total is: $" + totalCost.toFixed(2);
  }

 // Loop through each checkbox
 checkboxes.forEach(function(checkbox) {
     // Checks if a checkbox is selected
     checkbox.addEventListener('change', function() {
         // Get the corresponding number input field using the checkbox's id
         var numberInput = document.getElementById(this.id + 'Amount');
         var label = document.getElementById(this.id + 'Label');

         // Toggle visibility of the number input based on checkbox's checked state
         numberInput.style.display = this.checked ? 'inline-block' : 'none';
         numberInput.required = this.checked ? 'true' : 'false';
         label.style.display = this.checked ? 'inline-block' : 'none';
         calculateTotalPrice();
     });

 });

//Keeps the total up to date
amountInput.forEach(function(checkInput) {
    checkInput.addEventListener('change', function() {
        calculateTotalPrice();
    });
});

//Makes the reset button clear everything
resetButton.addEventListener('click', function() {
    //loop through every checkbox
    checkboxes.forEach(function(checkbox) {
        var numberInput = document.getElementById(checkbox.id + 'Amount');
        var labelAmount = document.getElementById(checkbox.id + 'Label');
        // Toggle visibility of the number input based on checkbox's checked state
        numberInput.style.display ='none';
        numberInput.required ='false';
        labelAmount.style.display = 'none'
    });
    
    document.getElementById('total').textContent = "Your total is: $0.00";
});

const orderForm = document.getElementById('orderForm');

// Add an event listener to the form's submit event
orderForm.addEventListener('submit', function() {
        placedLabel.style.display = 'block';
});