//Setting Variables
const dateDisplay = document.getElementById('time');
let isOpen = false;
let isFlip = false;

//Display the time
function displayTime() {
    //setting variables
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //Getting date
    const day = date.getDate();
    const dayofweek = days[date.getDate()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    //Displaying data
    const formattedDate =`Today is ${dayofweek}, ${month} ${day}, ${year} at ${hours}:${minutes}`;
    dateDisplay.textContent = formattedDate;
}

//Form buttons
function displayData() {
    event.preventDefault();
    let user = document.getElementById('name').value;
    let mood = document.getElementById('feeling').value;
    const output = document.getElementById('display');

    let text = `The Cariello Company welcomes you, ${user}! We are glad you are doing ${mood}!`;
    output.innerHTML = text;
}

function clearData() {
    const output = document.getElementById('display');
    output.innerHTML = "";
}

function displayPoly() {
    //gathering varaibles
    event.preventDefault();
    let poly = document.getElementById('polynum').value;
    const output = document.getElementById('polydisplay');
    //converting string to absolute value
    let text;
    poly = Number(poly);
    if (poly< 0) {
        poly *= -1;
    }
    //swtich case
    switch (poly){
        case 0:
            text = "void"
            break;
        case 1:
            text = "henagon";
            break;
        case 2:
            text = "digon";
            break;
        case 3:
            text = "trigon";
            break;
        case 4:
            text = "tetragon";
            break;
        case 5:
            text = "pentagon";
            break;
        case 6:
            text = "hexagon";
            break;
        case 7:
            text = "heptagon";
            break;
        case 8:
            text = "octagon";
            break;
        case 9:
            text = "enneagon";
            break;
        case 10:
            text = "decagon";
            break;
        default:
            text = "Error";
            break;
    }


    output.innerHTML = `That would be a ${text}!`; 
}

function calcsum() {
    //Gathering variables
    event.preventDefault();
    const output = document.getElementById('sumdisplay');
    let sum;
    let numOne = document.getElementById('numone').value;
    let numTwo = document.getElementById('numtwo').value;
    sum = Number(numOne) + Number(numTwo);
    //Display
    output.innerHTML = `The sum of these numbers is ${sum}`;
}

function catchphrase() {
    //Generates a random number
    const output = document.getElementById('buttontwodisplay');
    let rand = Math.floor(Math.random() * 10);
    let text;
    //Switch case to choose the catchphrase
    switch (rand) {
        case 0:
            text = "Keep pushing, keep cruising!";
            break;
        case 1:
            text = "Grind till you shine!";
            break;
        case 2:
            text = "Be fearless in the pursuit of what sets your soul on fire.";
            break;
        case 3:
            text = "Dream big, work hard, stay humble.";
            break;
        case 4:
            text = "Find your passion and run with it.";
            break;
        case 5:
            text = "Chase sunsets, not deadlines.";
            break;
        case 6:
            text = "Life's a climb, but the view is worth it.";
            break;
        case 7:
            text = "Seize the day and make it legendary.";
            break;
        case 8:
            text = "Dream it, believe it, achieve it.";
            break;
        case 9:
            text = "Be a voice, not an echo.";
            break;
        default:
            text = "Sometimes the best way to solve your own problems is to help someone else"
            break;
    }

    output.innerHTML = text;
}

function openDoor() {
    //variables
    const imageDoor = document.getElementById('doorimg');
    const buttonText = document.getElementById('knock');

    //Testing if the door is open or not
    if (isOpen) {
        //Changing image and button text
        imageDoor.src = 'images/doorClosed.png'
        buttonText.textContent = "Knock"
        isOpen = false;
    } else {
        //Changing image and button text
        imageDoor.src = 'images/puppyCute.png'
        buttonText.textContent = "Close Door"
        isOpen = true;
   }
}

function palindromeTester() {
    event.preventDefault();
    //Gather varaibles
    let str = document.getElementById('palindromeinput').value;
    const palindromeDisplay = document.getElementById('palindromedisplay');

    if (str === str.split('').reverse().join('')){
        palindromeDisplay.innerHTML = `${str} is a palindrome!`;
    } else {
        palindromeDisplay.innerHTML = `${str} is not a palindrome!`;
    }
    
}

function flip() {
    //Varaibles
    const body = document.body;
    //Flip the page 180 degrees
    if (isFlip) {
        body.style.transform = "rotate(0deg)";
        isFlip = false;
    } else {
        body.style.transform = "rotate(180deg)";
        isFlip = true;
    }
}

displayTime();