// Constantes de Moseley
var mParticula = 0; // Dato de la velocidad de la particula (V)
var vParticula = 0; // Dato de la Masa de la particula(M)
var constantePlackExponete = 0;
var resulVeloPorMasa = 0;
var resulDivi = 0;
var resultadosFinal = 0;


var constantePlank = 6.626 * Math.pow(10, -34);

let constantePlankExponente = constantePlank.toExponential(3);

let partesConstantePlank = constantePlankExponente.split("e");
let decimalPartesConstantePlank = parseFloat(partesConstantePlank[0]);

//console.log(constantePlank);
//console.log(decimalPartesConstantePlank);


let tituloImagenContenedor = document.getElementById('tituloImg');

function calcular() {

    mParticula = parseFloat(document.getElementById('mParticle').value);
    vParticula = parseFloat(document.getElementById('vParticle').value);
    contenedorResultados = document.getElementById('results');

    if (isNaN(vParticula) || isNaN(mParticula)) {
        contenedorResultados.innerHTML = "<p>Por favor, ingresa valores numéricos válidos.</p>";
        return;
    }

    //console.log(mParticula);
    //console.log(vParticula);

    constantePlackExponete = constantePlank.toExponential(3);
    resulVeloPorMasa = (mParticula * vParticula).toExponential(3);

    partesresulVeloPorMasa = resulVeloPorMasa.split("e");
    decimalPartesresulVeloPorMasa = parseFloat(partesresulVeloPorMasa[0]);

    console.log(decimalPartesresulVeloPorMasa);

    resulDivi = (constantePlackExponete / resulVeloPorMasa);
    resultadosFinal = resulDivi.toExponential(3);

    partesResultadosFinal = resultadosFinal.split("e");
    decimalPartResultadoFinal = parseFloat(partesResultadosFinal[0]);

    //console.log(constantePlank);
    //console.log(constantePlackExponete);
    //console.log(resulVeloPorMasa);
    //console.log(resulDivi);
    //console.log(resultadosFinal);
    //console.log(decimalPartResultadoFinal);

    // Mostrar resultados iniciales
        contenedorResultados.innerHTML = "<p>h = " + decimalPartesConstantePlank.toFixed(3) + " x 10<sup>-34</sup> J * s </p>" +
        "<p>M = "+ mParticula +" Kg </p>" +
        "<p>V = " + vParticula + " m/s </p><br>" +

        "<p><strong>El resultado es:</strong></p>" +
        "<p>V = " + decimalPartResultadoFinal + " x 10 <sup>-34</sup> m</p><br>" +
        "<button onclick='mostrarDetalle()'>Más detalle</button>";

    // Mostrar resultados detallados al hacer clic en "Más detalle"
    document.getElementById('detalle').style.display = 'none';
}

// Mostrar detalles de los cálculos
function mostrarDetalle() {
    var detalles = "<p><strong>Siempre la constante de Plank es:</strong> h = 6.626x10<sup>-34</sup> J * s</p>" +
        "<p><strong>Ahora se usará la fórmula de las Ondas de Broglie:<br></strong> λ = h/(m*v)</p>" +
        "<br><p><strong>Donde:</strong></p>" +
        "<ul>" +
        "<li>h = la constante de Plack.</li>" +
        "<li>V = la velocidad.</li>" +
        "<li>M = la masa.</li>" +
        "</ul> <br>" +

        "<p><strong>Para calcular la onda de Brogle :</strong></p>" +
        "<p>λ = h/(m*v)" +
        "<p> λ = " + decimalPartesConstantePlank.toFixed(3) + " X 10<sup>-34</sup> / (" + mParticula + " * " + vParticula + ")</p>" +
        "<p> λ = " + decimalPartesConstantePlank.toFixed(3) + " X 10<sup>-34</sup> / " + decimalPartesresulVeloPorMasa.toFixed(3) + "</p>" +
        "<p> λ = " + decimalPartResultadoFinal.toFixed(3) + " X 10<sup>-34</sup> </p>" +
        "<br>" +    
        "<p><strong>El resultado es:</strong></p>" +
        "<p>    λ = " + decimalPartResultadoFinal + " X 10<sup>-34</sup> m</p>";


    // Mostrar detalles
    document.getElementById('detalles').innerHTML = detalles;
    document.getElementById('detalle').style.display = 'block';
}

// Limpiar campos
function limpiar() {
    document.getElementById('mParticle').value = '';
    document.getElementById('vParticle').value = '';
}

// Retroceder a la página anterior
function Retroceder() {
    window.history.back();
}
