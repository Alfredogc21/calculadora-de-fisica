// Constantes de Moseley
var numAtomico = 0; // Numero Atomico (Z)

let constanteSerieExpectro = -500;
let constanteSerieExpectro2 = 500;
let constanteProporcionalidad = 3.0 * Math.pow(10, 15);
let constanteProporcionalidadExponete = constanteProporcionalidad.toExponential(3);
let resFrecuenciaExpectral = (constanteProporcionalidad * 542).toExponential(3);
let resFrecuenciaExpectral2 = (constanteProporcionalidad * 542);
let resultadosFinal = Math.pow(resFrecuenciaExpectral, 2);

let operacion1 = 0;
let operacion2 = 0;
let operacion3 = 0;

let partesConstanteProporcionalidad = constanteProporcionalidadExponete.split("e");
let decimalPartContanteProrcinalidad = parseFloat(partesConstanteProporcionalidad[0]);

let nombreAtomico = '';
let inicialAtomico = '';

const elementosTablaPeriodicaArray = [
    { nombre: 'Hidrógeno', numeroAtomico: 1, inicial: 'H' },
    { nombre: 'Helio', numeroAtomico: 2, inicial: 'He' },
    { nombre: 'Litio', numeroAtomico: 3, inicial: 'Li' },
    { nombre: 'Berilio', numeroAtomico: 4, inicial: 'Be' },
    { nombre: 'Boro', numeroAtomico: 5, inicial: 'B' },
    { nombre: 'Carbono', numeroAtomico: 6, inicial: 'C' },
    { nombre: 'Nitrógeno', numeroAtomico: 7, inicial: 'N' },
    { nombre: 'Oxígeno', numeroAtomico: 8, inicial: 'O' },
    { nombre: 'Flúor', numeroAtomico: 9, inicial: 'F' },
    { nombre: 'Neón', numeroAtomico: 10, inicial: 'Ne' },
    { nombre: 'Sodio', numeroAtomico: 11, inicial: 'Na' },
    { nombre: 'Magnesio', numeroAtomico: 12, inicial: 'Mg' },
    { nombre: 'Aluminio', numeroAtomico: 13, inicial: 'Al' },
    { nombre: 'Silicio', numeroAtomico: 14, inicial: 'Si' },
    { nombre: 'Fósforo', numeroAtomico: 15, inicial: 'P' },
    { nombre: 'Azufre', numeroAtomico: 16, inicial: 'S' },
    { nombre: 'Cloro', numeroAtomico: 17, inicial: 'Cl' },
    { nombre: 'Argón', numeroAtomico: 18, inicial: 'Ar' },
    { nombre: 'Potasio', numeroAtomico: 19, inicial: 'K' },
    { nombre: 'Calcio', numeroAtomico: 20, inicial: 'Ca' },
    { nombre: 'Escandio', numeroAtomico: 21, inicial: 'Sc' },
    { nombre: 'Titanio', numeroAtomico: 22, inicial: 'Ti' },
    { nombre: 'Vanadio', numeroAtomico: 23, inicial: 'V' },
    { nombre: 'Cromo', numeroAtomico: 24, inicial: 'Cr' },
    { nombre: 'Manganeso', numeroAtomico: 25, inicial: 'Mn' },
    { nombre: 'Hierro', numeroAtomico: 26, inicial: 'Fe' },
    { nombre: 'Cobalto', numeroAtomico: 27, inicial: 'Co' },
    { nombre: 'Níquel', numeroAtomico: 28, inicial: 'Ni' },
    { nombre: 'Cobre', numeroAtomico: 29, inicial: 'Cu' },
    { nombre: 'Cinc', numeroAtomico: 30, inicial: 'Zn' },
    { nombre: 'Galio', numeroAtomico: 31, inicial: 'Ga' },
    { nombre: 'Germanio', numeroAtomico: 32, inicial: 'Ge' },
    { nombre: 'Arsénico', numeroAtomico: 33, inicial: 'As' },
    { nombre: 'Selenio', numeroAtomico: 34, inicial: 'Se' },
    { nombre: 'Bromo', numeroAtomico: 35, inicial: 'Br' },
    { nombre: 'Kriptón', numeroAtomico: 36, inicial: 'Kr' },
    { nombre: 'Rubidio', numeroAtomico: 37, inicial: 'Rb' },
    { nombre: 'Estroncio', numeroAtomico: 38, inicial: 'Sr' },
    { nombre: 'Itrio', numeroAtomico: 39, inicial: 'Y' },
    { nombre: 'Zirconio', numeroAtomico: 40, inicial: 'Zr' },
    { nombre: 'Niobio', numeroAtomico: 41, inicial: 'Nb' },
    { nombre: 'Molibdeno', numeroAtomico: 42, inicial: 'Mo' },
    { nombre: 'Tecnecio', numeroAtomico: 43, inicial: 'Tc' },
    { nombre: 'Rutenio', numeroAtomico: 44, inicial: 'Ru' },
    { nombre: 'Rodio', numeroAtomico: 45, inicial: 'Rh' },
    { nombre: 'Paladio', numeroAtomico: 46, inicial: 'Pd' },
    { nombre: 'Plata', numeroAtomico: 47, inicial: 'Ag' },
    { nombre: 'Cadmio', numeroAtomico: 48, inicial: 'Cd' },
    { nombre: 'Indio', numeroAtomico: 49, inicial: 'In' },
    { nombre: 'Estaño', numeroAtomico: 50, inicial: 'Sn' },
    { nombre: 'Antimonio', numeroAtomico: 51, inicial: 'Sb' },
    { nombre: 'Telurio', numeroAtomico: 52, inicial: 'Te' },
    { nombre: 'Yodo', numeroAtomico: 53, inicial: 'I' },
    { nombre: 'Xenón', numeroAtomico: 54, inicial: 'Xe' },
    { nombre: 'Cesio', numeroAtomico: 55, inicial: 'Cs' },
    { nombre: 'Bario', numeroAtomico: 56, inicial: 'Ba' },
    { nombre: 'Lantano', numeroAtomico: 57, inicial: 'La' },
    { nombre: 'Hafnio', numeroAtomico: 72, inicial: 'Hf' },
    { nombre: 'Tantalio', numeroAtomico: 73, inicial: 'Ta' },
    { nombre: 'Wolframio', numeroAtomico: 74, inicial: 'W' },
    { nombre: 'Renio', numeroAtomico: 75, inicial: 'Re' },
    { nombre: 'Osmio', numeroAtomico: 76, inicial: 'Os' },
    { nombre: 'Iridio', numeroAtomico: 77, inicial: 'Ir' },
    { nombre: 'Platino', numeroAtomico: 78, inicial: 'Pt' },
    { nombre: 'Oro', numeroAtomico: 79, inicial: 'Au' },
    { nombre: 'Mercurio', numeroAtomico: 80, inicial: 'Hg' },
    { nombre: 'Talio', numeroAtomico: 81, inicial: 'Tl' },
    { nombre: 'Plomo', numeroAtomico: 82, inicial: 'Pb' },
    { nombre: 'Bismuto', numeroAtomico: 83, inicial: 'Bi' },
    { nombre: 'Polonio', numeroAtomico: 84, inicial: 'Po' },
    { nombre: 'Astato', numeroAtomico: 85, inicial: 'At' },
    { nombre: 'Radón', numeroAtomico: 86, inicial: 'Rn' },
    { nombre: 'Francio', numeroAtomico: 87, inicial: 'Fr' },
    { nombre: 'Radio', numeroAtomico: 88, inicial: 'Ra' },
    { nombre: 'Actinio', numeroAtomico: 89, inicial: 'Ac' },
    { nombre: 'Rutherfordio', numeroAtomico: 104, inicial: 'Rf' },
    { nombre: 'Dubnio', numeroAtomico: 105, inicial: 'Db' },
    { nombre: 'Seaborgio', numeroAtomico: 106, inicial: 'Sg' },
    { nombre: 'Bohrio', numeroAtomico: 107, inicial: 'Bh' },
    { nombre: 'Hassio', numeroAtomico: 108, inicial: 'Hs' },
    { nombre: 'Meitnerio', numeroAtomico: 109, inicial: 'Mt' },
    { nombre: 'Darmstadio', numeroAtomico: 110, inicial: 'Ds' },
    { nombre: 'Roentgenio', numeroAtomico: 111, inicial: 'Rg' },
    { nombre: 'Copernicio', numeroAtomico: 112, inicial: 'Cn' },
    { nombre: 'Nihonio', numeroAtomico: 113, inicial: 'Nh' },
    { nombre: 'Flerovio', numeroAtomico: 114, inicial: 'Fl' },
    { nombre: 'Moscovio', numeroAtomico: 115, inicial: 'Mc' },
    { nombre: 'Livermorio', numeroAtomico: 116, inicial: 'Lv' },
    { nombre: 'Tenesino', numeroAtomico: 117, inicial: 'Ts' },
    { nombre: 'Oganesón', numeroAtomico: 118, inicial: 'Og' }
];

let tituloImagenContenedor = document.getElementById('tituloImg');

function calcular() {

    numAtomico = parseFloat(document.getElementById('nAtomico').value);
    contenedorResultados = document.getElementById('results');

    if (isNaN(numAtomico)) {
        contenedorResultados.innerHTML = "<p>Por favor, ingresa valores numéricos válidos.</p>";
        return;
    }

    for (let i = 0; i < elementosTablaPeriodicaArray.length; i++) {
        if (numAtomico == elementosTablaPeriodicaArray[i].numeroAtomico){
            nombreAtomico = elementosTablaPeriodicaArray[i].nombre;
            inicialAtomico = elementosTablaPeriodicaArray[i].inicial;
        }
    }

    tituloImagenContenedor.innerHTML = "<h2>Los rayos X de Moseley en el atomo de "+ nombreAtomico +"("+ inicialAtomico +")</h2>";

    operacion1 = (constanteProporcionalidad) * (numAtomico - (constanteSerieExpectro));
    sumaAtomConstanteExpectro = numAtomico - (constanteSerieExpectro);

    operacion2 = operacion1.toExponential(3);

    partesResulOperacion2 = operacion2.split("e");
    decimalPartOperacion2 = parseFloat(partesResulOperacion2[0]);

    operacion3 = Math.pow(operacion2, 2).toExponential(3);

    partesResultadoFinal = operacion3.split("e");
    decimalPartResultadoFinal = parseFloat(partesResultadoFinal[0]);

    // Mostrar resultados iniciales
        contenedorResultados.innerHTML = "<p>C = " + decimalPartContanteProrcinalidad.toFixed(1) + "x10<sup>15</sup> Hz o " + constanteProporcionalidad + " Hz</p>" +
        "<p>Z = "+ numAtomico +" pertenece al atomo de "+ nombreAtomico +"("+ inicialAtomico +") </p>" +
        "<p>σ = " + constanteSerieExpectro + " </p><br>" +

        "<p><strong>El resultado es:</strong></p>" +
        "<p>V = " + decimalPartResultadoFinal + " x 10 <sup>36</sup> Hz</p><br>" +
        "<button onclick='mostrarDetalle()'>Más detalle</button>";

    // Mostrar resultados detallados al hacer clic en "Más detalle"
    document.getElementById('detalle').style.display = 'none';
}

// Mostrar detalles de los cálculos
function mostrarDetalle() {
    var detalles = "<p><strong>Siempre la constante de proporcionalidad es:</strong> C = 3.0x10<sup>15</sup> Hz</p>" +
        "<p><strong>Siempre la constante específica de la serie de espectros es:</strong> σ = -500</p>" +
        "<p><strong>Ahora se usará la fórmula de Compton:</strong> V = C<sup>2</sup>(Z-σ)<sup>2</sub></p>" +
        "<p><strong>Donde:</strong></p>" +
        "<ul>" +
        "<li>V = la frecuencia de la línea es pectral</li>" +
        "<li>C = la constante de proporcionalidad</li>" +
        "<li>Z = el número atómico del elemento.</li>" +
        "<li>σ = la constante específica de la serie de espectros.</li>" +
        "</ul> <br>" +

        "<p><strong>Para calcular la frecuencia de los rayos X característicos del atomo de "+ nombreAtomico +"("+ inicialAtomico +"):</strong></p>" +
        "<p>V = C<sup>2</sup>(Z-σ)<sup>2</p><br>" +
        "<p> √V = " + decimalPartContanteProrcinalidad.toFixed(1) + "X10<sup>2</sup> * (" + numAtomico + " - (" + constanteSerieExpectro + "))</p>" +
        "<p> √V = " + decimalPartContanteProrcinalidad.toFixed(1) + "X10<sup>2</sup> * (" + numAtomico + " + " + constanteSerieExpectro2 + ")</p>" +
        "<p> √V = " + decimalPartContanteProrcinalidad.toFixed(1) + "X10<sup>2</sup> * (" + sumaAtomConstanteExpectro + ")</p>" +
        "<p> √V = " + decimalPartOperacion2 + "X10<sup>18</sup> Hz</p>" +
        "<p>    V = (" + decimalPartOperacion2 + "X10<sup>18</sup>)<sup>2</sup> Hz</p>" +
        "<p>    V = " + decimalPartResultadoFinal + "X10<sup>36</sup> Hz</p> <br>" +

        "<p><strong>El resultado es:</strong></p>" +
        "<p>    V = " + decimalPartResultadoFinal + "X10<sup>36</sup> Hz</p>";


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
