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
const alturaTriangulo=5.5
//console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
//console.log("El perimtro del triangulo es:"+perimetroTriangulo+"cm");

function areaTriangulo(base,altura){
    return (base*altura)/2
}
//console.log("El are del triangulo es: "+areaTriangulo+"cm^2");
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
