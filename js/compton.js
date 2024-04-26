// Constante de Compton
var lambda_c = 2.440; // Longitud de onda Compton (λc) en pm
var theta = 0; // Ángulo de dispersión en grados
var delta_lambda = 0; // Dispersión de Compton Δλ
var delta_lambda_max = 0; // Mayor dispersión de Compton Δλmax
var longitudOndaIncidente = 0; // Longitud de onda incidente λ'
var angulo = 0; // Ángulo de dispersión en grados
var longitudOnda = 0; // Longitud de onda incidente λ
var contenedorResultados = null;

function calcular() {
    longitudOnda = parseFloat(document.getElementById('wavelength').value);
    angulo = parseFloat(document.getElementById('angle').value);
    contenedorResultados = document.getElementById('results');

    if (isNaN(longitudOnda) || isNaN(angulo)) {
        contenedorResultados.innerHTML = "<p>Por favor, ingresa valores numéricos válidos.</p>";
        return;
    }

    // Convertir ángulo a radianes
    theta = angulo * Math.PI / 180;

    // Fórmula de Compton para calcular la longitud de onda dispersada
    delta_lambda = lambda_c * (1 - (Math.cos(theta))); // Dispersión de Compton Δλ

    delta_lambda_max = 2 * lambda_c; // Mayor dispersión de Compton

    // Calcular longitud de onda incidente con la dispersión de Compton
    longitudOndaIncidente = longitudOnda + delta_lambda;

    // Mostrar resultados iniciales
    contenedorResultados.innerHTML =  "<p>λc = " + lambda_c.toFixed(3) + "x 10 <sup>-12</sup> pm o " + lambda_c.toFixed(3) + " pm</p>" +
                                      "<p>Δλ = " + delta_lambda.toFixed(3) + " pm</p>" +
                                      "<p>λ' = " + longitudOndaIncidente.toFixed(2) + " pm</p>" +
                                      "<p>Δλmax = " + delta_lambda_max.toFixed(2) + " pm</p>" +
                                      "<button onclick='mostrarDetalle()'>Más detalle</button>";

    // Mostrar resultados detallados al hacer clic en "Más detalle"
    document.getElementById('detalle').style.display = 'none';
}

// Mostrar detalles de los cálculos
function mostrarDetalle() {
    var detalles = "<p><strong>Siempre la constante de Compton es:</strong> λc = 2.440 pm</p>" +
                   "<p><strong>Ahora se usará la fórmula de Compton:</strong> Δλ = λ' - λ =  λc * (1 - cos(θ))</p>" +
                     "<p><strong>Donde:</strong></p>" +
                        "<ul>" +
                            "<li>Δλ = Dispersión de Compton</li>" +
                            "<li>λ' = Longitud de onda dispersada</li>" +
                            "<li>λ = Longitud de onda incidente</li>" +
                            "<li>λc = Longitud de onda Compton</li>" +
                            "<li>θ = Ángulo de dispersión</li>" +
                        "</ul> <br>" +

                    "<p><strong>Para calcular la longitud de onda de los rayos x dispersados (λ'):</strong></p>" +
                    "<p> Δλ = λ' - λ =  λc * (1 - cos(θ))</p>" + 
                    "<p> Δλ = λ' - λ = " + lambda_c + " * (1 - cos(" + angulo + "))</p>" +
                    "<p> Δλ = λ' - λ = " + lambda_c + " * (" + (1 - (Math.cos(theta))) + ")</p>" +
                    "<p> Δλ = λ' - λ = " + parseFloat(delta_lambda.toExponential(3)) + " pm</p><br>" +

                    "<p>Δλ = λ' - λ al despejar queda λ' = λ + Δλ </p>" +
                    "<p>λ' = " + longitudOnda + " + " + parseFloat(delta_lambda.toExponential(3)) + "</p>" +
                    "<p>λ' = " + parseFloat(longitudOndaIncidente.toExponential(3)) + " picometros (pm)</p><br>" +

                    "<p><strong>Calcular la mayor dispersión de Compton (Δλmax):</strong></p>" +
                    "<p>Δλmax = λc * (1-cos(180°))</p>" +
                    "<p>Δλmax = " + lambda_c + " * 2</p>" +
                    "<p>Δλmax = " + delta_lambda_max + " pm</p>";

    // Mostrar detalles
    document.getElementById('detalles').innerHTML = detalles;
    document.getElementById('detalle').style.display = 'block';
}

// Limpiar campos
function limpiar() {
    document.getElementById('wavelength').value = '';
    document.getElementById('angle').value = '';
}

// Retroceder a la página anterior
function Retroceder() {
    window.history.back();
}
