//Codigo cuadrado
console.group("Cuadrados");

const cuadrado=5;
console.log("los lados del cuadrado miden: "+cuadrado+"cm");

const perimetroCuadrado=cuadrado*4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado=cuadrado*cuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+"cm2");
console.groupEnd();
// Codigo Trinagulo
console.group("Triangulo");

const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;

console.log("los lados del cuadrado miden: "
    +ladoTriangulo1+"cm,"
    +ladoTriangulo2+"cm,"
    +baseTriangulo+"cm"
);
const alturaTriangulo=5.5
console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimtro del triangulo es:"+perimetroTriangulo+"cm");

const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("El are del triangulo es: "+areaTriangulo+"cm^2");
console.groupEnd();

//codigo circulo
console.group("Circulo");
const PI=Math.PI;
const radioCirculo=4;
console.log("El radio del circulo es : "+radioCirculo+"cm");

const perimetroCirculo=PI*radioCirculo*2;
console.log("El perimetro del circulo es : "+perimetroCirculo+"cm");

const areaCirculo=PI*(radioCirculo*radioCirculo);
console.log("El area del circulo es : "+areaCirculo+"cm")
