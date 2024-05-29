const amount = document.getElementById("amount")
const submitBtn = document.getElementById("submit-btn")
const initialValue = document.getElementsByClassName("initial")

const measurments = [
    {
        name: "feet",       
        conversion: 3.280839895013129 // <= feet = 1 meter
    },
    {
        name: "meters",
        conversion: 0.3048 // <= meters = 1 foot
    },
    {
        name: "liters",
        conversion: 3.785412 // <= liters = 1 gallon

    },
    {
        name: "gallons",
        conversion: 0.264172037284185// <= gallons = 1 liter
    },
    {
        name: "kilos",
        conversion: 0.45359237  // <= pounds = 1 kilo
    },
    {
        name: "pounds",
        conversion: 2.20462262184878 // <= kilograms = 1 pound
    }

]

submitBtn.addEventListener("click", function() {
    let amountValue = parseInt(amount.value)
    let unit = ""
    let convert = ""

    for (let i = 0; i < initialValue.length; i++) {
        initialValue[i].innerHTML = amountValue 
        unit = document.getElementById(measurments[i].name)
        convert = (amountValue * measurments[i].conversion).toFixed(3)
        unit.innerText = convert
    }

})