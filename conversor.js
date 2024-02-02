function convertirTemperatura() {
    let celsius = document.getElementById('celsius').value;
    
    // Validar que la entrada sea un número
    if (isNaN(celsius) || celsius.trim() === '') {
        alert('Por favor ingrese un valor numérico válido.');
        return;
    }

    celsius = parseFloat(celsius);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // Mostrar resultados en el DOM
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
                              <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>`;
}
