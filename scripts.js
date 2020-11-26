
// the next funcion is executed when the submit button is clicked
function handleSubmit(event) {
    // catching the result div to exhibit the values on submit
    let results = document.getElementById("results")

    const duration = document.getElementById("duration").value

    // stops the page from reloading when the submit button is pressed
    event.preventDefault()
    
    // sets the number of adults and kids to zero if there is nothing typed when submited
    const adults = document.getElementById('adults').value === '' ? 0 : document.getElementById('adults').value
    const kids = document.getElementById('kids').value === '' ? 0 : document.getElementById('kids').value


    // checks if the checkboxes are active. if yes gets the value from the respective input. if not, sets the const to zero
    const vegetarianAdults = document.getElementById("vegetarian-adults").checked ? document.getElementById("number-vegetarian-adults").value : 0
    const nonDrinking = document.getElementById("non-drinking-adults").checked ? document.getElementById("number-non-drinking").value : 0
    const vegetarianKids = document.getElementById("vegetarian-kids").checked ? document.getElementById("number-vegetarian-kids").value : 0

    
    //calculating results
    const meatEaterAdults = adults - vegetarianAdults
    const meatEaterKids = kids - vegetarianKids
    const beerDrinkers = adults - nonDrinking

    const meat = ((meatEaterAdults*0.067 + meatEaterKids*0.033)*duration).toFixed(2)
    const beer = ((beerDrinkers*0.6)*duration).toFixed(2)
    const sodaOrWater = ((kids*0.25 + nonDrinking*0.5)*duration).toFixed(2)

    // if the inputs are inconsistants a alert will show up
    if (meatEaterAdults < 0 || beerDrinkers < 0 || meatEaterKids < 0) {
        alert('Preencha os campos corretamente')
    } else {
        results.innerHTML = `<p class="exhibit-results">${meat} kilos de carne</p>`  
        results.innerHTML += `<p class="exhibit-results">${beer} litros de cerveja</p>`
        results.innerHTML += `<p class="exhibit-results">${sodaOrWater} litros de água, refrigerante ou suco</p>`
    }
}


// the next three functions are in charge to exhibit a input when the checkbox is active and hide this input when the checkbox is disabled 
function changeVegetarianAdults() {
    let inputVegAdults

    // if the checkbox is active the input will show up, otherwise the input will be hidden
    if (document.getElementById("vegetarian-adults").checked) {
        inputVegAdults = document.getElementById("vegetarian-adults-div")
        inputVegAdults.innerHTML =
        `<p><label for="number-vegetarian-adults">
            Quantos?<input class="number-input" id="number-vegetarian-adults" type="number" placeholder="Adultos vegetarianos">
        </label></p>`
    } else {
        inputVegAdults = document.getElementById("vegetarian-adults-div")
        inputVegAdults.innerHTML = `<div id="vegetarian-adults-div"></div>`
    }
}

function changeNonDrinking() {
    let inputNonDrinking

    if (document.getElementById("non-drinking-adults").checked) {
        inputNonDrinking = document.getElementById("non-drinking-div")
        inputNonDrinking.innerHTML =
        `<p><label for="number-non-drinking">
            Quantos?<input class="number-input" id="number-non-drinking" type="number" placeholder="Adultos que não bebem">
        </label></p>`
    } else {
        inputNonDrinking = document.getElementById("non-drinking-div")
        inputNonDrinking.innerHTML = `<div id="non-drinking-div"></div>`
    }
}

function changeVegetarianKids() {
    let inputVegKids

    if (document.getElementById("vegetarian-kids").checked) {
        inputVegKids = document.getElementById("vegetarian-kids-div")
        inputVegKids.innerHTML =
        `<p><label for="number-vegetarian-kids">
            Quantos?<input class="number-input" id="number-vegetarian-kids" type="number" placeholder="Crianças vegetarianas">
        </label></p>`
    } else {
        inputVegKids = document.getElementById("vegetarian-kids-div")
        inputVegKids.innerHTML = `<div id="vegetarian-kids-div"></div>`
    }
}
