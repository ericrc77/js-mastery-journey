function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

document.getElementById('converter').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert('Por favor, insira um número válido.');
        return;
    }
    const fahrenheit = celsiusToFahrenheit(celsius);
    document.getElementById('resultado').innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}
);