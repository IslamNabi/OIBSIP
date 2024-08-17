document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let outputTemp = '';

    if (isNaN(inputTemp)) {
        outputTemp = 'Invalid input';
    } else {
        switch (inputUnit) {
            case 'Celsius':
                outputTemp = `${((inputTemp * 9) / 5 + 32).toFixed(2)} °F | ${(inputTemp + 273.15).toFixed(2)} K`;
                break;
            case 'Fahrenheit':
                outputTemp = `${(((inputTemp - 32) * 5) / 9).toFixed(2)} °C | ${((((inputTemp - 32) * 5) / 9) + 273.15).toFixed(2)} K`;
                break;
            case 'Kelvin':
                outputTemp = `${(inputTemp - 273.15).toFixed(2)} °C | ${(((inputTemp - 273.15) * 9) / 5 + 32).toFixed(2)} °F`;
                break;
            default:
                outputTemp = 'Invalid unit';
        }
    }

    document.getElementById('outputTemp').innerText = outputTemp;
});
