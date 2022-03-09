// Solo Project from Module 3.2 of Scrimba.com's JavaScript course
// https://scrimba.com/ 


// project instructions: 

// save number to a variable in code

// when app loads, do calulations and 
// display the results

// round numbers to 3 decimal places

// check out this css gradient generator
// https://www.joshwcomeau.com/gradient-generator/

// extra: add input for the user to change the number 
// and automatically recalculate values when it changes

//
let lengthResults = document.getElementById("length-results")
let volumeResults = document.getElementById("volume-results")
let massResults = document.getElementById("mass-results")

// starting number
let numbVar = 10

// returning the value to the numbers id
document.getElementById("number").innerText = numbVar

// conversion formulas
let metersToFeet = 3.2808399
let feetToMeters = 0.3048
let litersToGallons = 3.785411784
let gallonsToLiters = 0.264172
let poundsToKilos = 0.45359237
let kilosToPounds = 2.20462262

// calculating length conversions
lengthResults.textContent =
    `
  ${numbVar} meters = ${(numbVar*metersToFeet).toFixed(3)} feet 
| ${numbVar} feet = ${(numbVar*feetToMeters).toFixed(3)} meters
 `
    // calculating volume conversions
volumeResults.textContent =
    `
    ${numbVar} liters = ${(numbVar*litersToGallons).toFixed(3)} gallon 
    | ${numbVar} gallons = ${(numbVar*gallonsToLiters).toFixed(3)} liters
    `
    // calculating mass conversions
massResults.textContent =
    `
    ${numbVar} kilos = ${(numbVar*poundsToKilos).toFixed(3)} pounds
    | ${numbVar} pounds = ${(numbVar*kilosToPounds).toFixed(3)} kilos
    `

// if user inputs own value
function getInputValue() {
    // selecting the input element and get its value 
    let inputVal = document.getElementById("myInput").value;

    // displaying the value
    // console.log(inputVal); // this was only here for testing purposes
    numbVar = inputVal

    // calculating length conversions
    lengthResults.textContent =
        `
    ${numbVar} meters = ${(numbVar*metersToFeet).toFixed(3)} feet 
    | ${numbVar} feet = ${(numbVar*feetToMeters).toFixed(3)} meters
    `
        // calculating volume conversions
    volumeResults.textContent =
        `
    ${numbVar} liters = ${(numbVar*litersToGallons).toFixed(3)} gallon 
    | ${numbVar} gallons = ${(numbVar*gallonsToLiters).toFixed(3)} liters
    `
        // calculating mass conversions
    massResults.textContent =
        `
    ${numbVar} kilos = ${(numbVar*kilosToPounds).toFixed(3)} pounds
    | ${numbVar} pounds = ${(numbVar*poundsToKilos).toFixed(3)} kilos
    `
        // returning the value to the numbers id
    document.getElementById("number").innerText = numbVar

}