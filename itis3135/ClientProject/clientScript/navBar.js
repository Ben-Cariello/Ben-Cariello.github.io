
//Nav scripts
//Declaring varaibles
const navButton = document.querySelector('#navButton');
const dropdown = document.querySelector('#dropdownDiv');
const dropDownElements = document.querySelectorAll('.dropdown');
var keyArray = Object.keys(dropDownElements);


navButton.addEventListener("mouseover", function() {
    keyArray.forEach(function(key){
        dropDownElements[key].style.display = 'block';
    });
});

dropdown.addEventListener("mouseout", function (event) {
    if (!dropdown.contains(event.relatedTarget)) {
        keyArray.forEach(function(key){
            dropDownElements[key].style.display = 'none';
        });
    }
});






