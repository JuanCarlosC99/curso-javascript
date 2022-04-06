//Codigo cuadrado
console.group("Cuadrados");

//const cuadrado=5;
//console.log("los lados del cuadrado miden: "+cuadrado+"cm");

function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El area del cuadrado es: "+areaCuadrado+"cm2");
console.groupEnd();
// Codigo Trinagulo
console.group("Triangulo");
/*
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;

console.log("los lados del cuadrado miden: "
    +ladoTriangulo1+"cm,"
    +ladoTriangulo2+"cm,"
    +baseTriangulo+"cm"
);*/
//const alturaTriangulo=5.5
//console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
//console.log("El perimtro del triangulo es:"+perimetroTriangulo+"cm");

function areaTriangulo(base,altura){
    return (base*altura)/2
}
//console.log("El are del triangulo es: "+areaTriangulo+"cm^2");
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

//codigo circulo

console.group("Circulo");
const PI=Math.PI;
/*const radioCirculo=4;
console.log("El radio del circulo es : "+radioCirculo+"cm");
*/
function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El perimetro del circulo es : "+perimetroCirculo+"cm");

function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("El area del circulo es : "+areaCirculo+"cm")

//Interaccion con HTML
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