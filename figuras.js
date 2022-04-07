//Codigo cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

//Fin codigo cuadrado
//Codigo Trinagulo

console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2
}

function alturaTrianguloIsosceles(lado,base){
    return Math.sqrt((lado**2)-(base**2/4));
}

function alturaTrianguloEquilatero(lado){
    return Math.sqrt(lado*3/2);
}

function alturaTrianguloEscaleno(lado1,lado2,base){
    var s=(lado1+lado2+base)/2;
    return Math.sqrt(s*(s-lado1)*(s-lado2)*(s-base))*2/base;
}
console.groupEnd();

//fin codigo triangulo
//codigo circulo

console.group("Circulo");
const PI=Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}

//fin codigo circulo

//**Interaccion con HTML**
//Cuadrado
function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);

    alert(perimetro)
}
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=areaCuadrado(value);

    alert(perimetro)
}

//fin cuadrado
//Triangulo

function calcularPerimetroTriangulo(){
    const lado1=document.getElementById("InputTrianguloLado1").value|0;
    const lado2=document.getElementById("InputTrianguloLado2").value|0;
    const base=document.getElementById("InputTrianguloLadoBase").value|0;

    const perimetro=perimetroTriangulo(lado1,lado2,base);
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const lado1=document.getElementById("InputTrianguloLado1").value|0;
    const lado2=document.getElementById("InputTrianguloLado2").value|0;
    const base=document.getElementById("InputTrianguloLadoBase").value|0;
    var altura;
    if(lado1===lado2===base){
         altura=alturaTrianguloEquilatero(lado1);
    }else if(lado1===lado2){
         altura=alturaTrianguloIsosceles(lado1,base);
    }else{
         altura=alturaTrianguloEscaleno(lado1,lado2,base);
    }
    const area=areaTriangulo(base,altura);
    alert(area)
}

//fin cuadrado
//circulo

function calcularPerimetroCirculo(){
    const radio=document.getElementById("InputCirculo").value|0;

    const perimetro=perimetroCirculo(radio);
    alert(perimetro)
}

function calcularAreaCirculo(){
    const radio=document.getElementById("InputCirculo").value|0;

    const area=areaCirculo(radio);
    alert(area)
}