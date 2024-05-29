// Constante de Principio de incertidumbre

let indeterminacion = 0;

// let indeterminacion = (1.0 * Math.pow(10, -6)).toExponential(1); // Constante de incertidumbre en m/s
// let partesIndeterminacion = indeterminacion.split("e");
// let parteDecimalIndeterminacion = partesIndeterminacion[0];
// let exponenteIndeterminacion = parseInt(partesIndeterminacion[1]);

// let masaElectron = (9.1 * Math.pow(10, -31)).toExponential(3); // Masa del electrón en kg

let constantePlanck = (6.63 * Math.pow(10, -34)).toExponential(3); // Constante de Planck en J s
let partesConstantePlanck = constantePlanck.split("e");
let parteDecimalConstantePlanck = partesConstantePlanck[0];
let exponenteConstantePlanck = parseInt(partesConstantePlanck[1]);

let cuatroPi = 4 * Math.PI;

let masaInput = 0;
var contenedorResultados = null;

let ap = 0, resultadosAp = 0, partesAp = 0, parteDecimalAp = 0, exponenteAp = 0;
let ax = 0, resultadosAx = 0, partesAx = 0, parteDecimalAx = 0, exponenteAx = 0;

function calcular() {
    masaInput = parseFloat(document.getElementById('masa').value); // Masa del electrón en kg
    contenedorResultados = document.getElementById('results');
    indeterminacion = parseFloat(document.querySelector("#velocidad").value); 


    if (isNaN(masaInput)) {
        contenedorResultados.innerHTML = "<p>Por favor, ingresa valores numéricos válidos.</p>";
        return;
    }

    //Operacion 1
    ap = (masaInput * indeterminacion).toExponential(3); // Incertidumbre de posición
    resultadosAp = ap + " kg m/s";
    // console.log(resultadosAp);

    partesAp = ap.split("e");
    parteDecimalAp = partesAp[0];
    exponenteAp = parseInt(partesAp[1]);
    // console.log(parteDecimalAp);
    // console.log(exponenteAp);

    //Operacion 2
    ax = (constantePlanck) / (cuatroPi * ap);
    resultadosAx = ax.toExponential(3) + " m";
    // console.log(resultadosAx);

    partesAx = resultadosAx.split("e");
    parteDecimalAx = partesAx[0];
    exponenteAx = parseInt(partesAx[1]);
    // console.log(parteDecimalAx);
    // console.log(exponenteAx);


    // Mostrar resultados iniciales
    contenedorResultados.innerHTML = "<p>∆𝒑 = " + parteDecimalAp + " kg*m/s </p>" +
        "<p>∆𝑥 = " + parteDecimalAx +  "x 10 <sup> " + exponenteAx + " </p>" +
        "<button onclick='mostrarDetalle()'>Más detalle</button>";

    // Mostrar resultados detallados al hacer clic en "Más detalle"
    document.getElementById('detalle').style.display = 'none';
}

// Mostrar detalles de los cálculos
function mostrarDetalle() {
    var detalles = "<p><strong>La formula de Principio de incertidumbre es: </strong> ∆𝑝=𝑚∗∆𝑢</p>" +
        "<p><strong>Donde:</strong></p>" +
        "<ul>" +
        "<li>∆𝑝 = Incertidumbre del momento</li>" +
        "<li>𝒎 = masa del cuerpo</li>" +
        "<li>∆𝒖 = Incertidumbre de velocidad del cuerpo</li>" +
        "</ul> <br>" +

        "<p><strong>Para calcular la incertidumbre del momento (∆𝑝):</strong></p>" +
        "<p> ∆𝑝 = (" + masaInput + " kg) * (" + indeterminacion + " m/s)</p>" +
        "<p> ∆𝑝 = " + parteDecimalAp + " kg m/s </p><br>" +

        "<p><strong>Ahora se halla la incertidumbre mínima de la posición de la partícula  (∆𝑥):</strong></p>" + //Voy aca
        "<img src='imagenes/principioIncertidumbreCap.png' class='capPrincipioIncertidumbre' alt='Formula Principio Incertidumbre'>" +
        "<p> ∆𝑥 ≥ ℎ / (4π * ∆𝑝)</p>" + 
        "<p> ∆𝑥 ≥ (" + parteDecimalConstantePlanck + " x 10 <sup>" + exponenteConstantePlanck + "</sup> J s) / (4π * " + parteDecimalAp + " kg m/s)</p>" +
        "<p> ∆𝑥 ≥ " + parteDecimalAx + " x 10 <sup>" + exponenteAx + "</sup> m</p>";

        // "<p>Δλmax = λc * (1-cos(180°))</p>" +
        // "<p>Δλmax = " + lambda_c + " * 2</p>" +
        // "<p>Δλmax = " + delta_lambda_max + " pm</p>";

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
