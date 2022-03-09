// save number to a variable in code

// when app loads, do calulations and 
// display the results

// round numbers to 3 decimal places

// check out this css gradient generator
// https://www.joshwcomeau.com/gradient-generator/

// add input for the user to change the number 
// and automatically recalculate values 
// when it changes




let numbVar = 10

document.getElementById("number").innerText = numbVar

function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("myInput").value;

    // Displaying the value
    console.log(inputVal);
    numbVar = inputVal

    document.getElementById("length-results").textContent =
        `
    ${numbVar} meters = ${(numbVar*3.2808).toFixed(3)} feet 
    | ${numbVar} feet = ${(numbVar*0.3049).toFixed(3)} meters
    `

    document.getElementById("volume-results").textContent =
        `
    ${numbVar} liters = ${(numbVar*3.7854).toFixed(3)} gallon 
    | ${numbVar} gallons = ${(numbVar*0.2642).toFixed(3)} liters
    `
    document.getElementById("mass-results").textContent =
        `
    ${numbVar} kilos = ${(numbVar*2.2046).toFixed(3)} pounds
    | ${numbVar} pounds = ${(numbVar*0.4536).toFixed(3)} kilos
    `

    document.getElementById("number").innerText = numbVar

}


// length Meters
//0.3049

// length Feet
//3.2808

document.getElementById("length-results").textContent =
    `
    ${numbVar} meters = ${(numbVar*3.2808).toFixed(3)} feet 
    | ${numbVar} feet = ${(numbVar*0.3049).toFixed(3)} meters
    `


// volume Liters
// 3.7854

// volume Gallons
// *    0.2642

document.getElementById("volume-results").textContent =
    `
    ${numbVar} liters = ${(numbVar*3.7854).toFixed(3)} gallon 
    | ${numbVar} gallons = ${(numbVar*0.2642).toFixed(3)} liters
    `


// mass Kilograms
// *    0.4536

// mass Pounds
// *    2.2046

document.getElementById("mass-results").textContent =
    `
    ${numbVar} kilos = ${(numbVar*2.2046).toFixed(3)} pounds
    | ${numbVar} pounds = ${(numbVar*0.4536).toFixed(3)} kilos
    `