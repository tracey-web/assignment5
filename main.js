//console.log('testing...')

// What are the steps the user is going to take?
// 1.) The user will type a city name
// 2.) They will then click update

// What are the steps we must take in JS?
// Using JS if statements to compare user unput to city name to know what image to switch to.

// 1.) listen for a click on the update button
var updateButton = document.querySelector('#submit-btn')
updateButton.addEventListener('click', newImage)

// 2.) extract input from page and convert to lowercase
function newImage (event) {
    event.preventDefault() // prevents both sending data to server and page reload

    var city = document.querySelector('#city-type')
    var cityName = city.value.toLowerCase();
    var body = document.querySelector('body')

    // 3.) Use JS if statement to compare user input to a city name (I'd probably use a case statement here)
    if (cityName == 'nyc' ||
    cityName == 'new york city') {
        // clear any previous className added to the classList
        body.className = '';
        body.classList.add('nyc') // change to the nyc.jpg background
    } else if (cityName == 'la' ||
    cityName == 'los angeles') {
        // clear any previous className added to the classList
        body.className = '';
        body.classList.add('la') // change to the la.jpg background
    } else if (cityName == 'sf' ||
    cityName == 'san francisco') {
        body.className = ''; // clear any previous className added to the classList
        body.classList.add('sf') // change to the sf.jpg background
    } else if (cityName == 'austin') {      
        body.className = ''; // clear any previous className added to the classList
        body.classList.add('austin') // change to the austin.jpg background
    } else if (cityName == 'sydney') {
        body.className = ''; // clear any previous className added to the classList
        body.classList.add('sydney') //// change to the sydney.jpg background
    } else {
        // if not a city in the list of images give an alert to the user (a dropdown list of city backgrounds might be better than an input box here)
        alert(`The city you selected doesn't have a background image associated wth instanceof. Please select another!`)
    }
} 
