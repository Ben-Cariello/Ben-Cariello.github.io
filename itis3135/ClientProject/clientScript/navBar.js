
//Nav scripts
//Declaring varaibles
const navButton = document.querySelector('#navButton');
const dropdown = document.querySelector('#dropdownDiv');
const dropDownElements = document.querySelectorAll('.dropdown');
var keyArray = Object.keys(dropDownElements);

//Checks if the mouse is over the nav bar
navButton.addEventListener("mouseover", function() {
    keyArray.forEach(function(key){
        dropDownElements[key].style.display = 'block';
    });
});
//checks if the mouse has left the nav bar
dropdown.addEventListener("mouseout", function (event) {
    if (!dropdown.contains(event.relatedTarget)) {
        keyArray.forEach(function(key){
            dropDownElements[key].style.display = 'none';
        });
    }
});
