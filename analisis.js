const salaryCol=colombia.map(
    function (persona){
        return persona.salary;
    }
);
const salaryColSorted=salaryCol.sort(
    function (salaryA,salaryB){
        return salaryA-salaryB;
    }
);
function isEvenNumber(numerito){ 
    return (numerito%2===0);
}
//calculateArithmeticAverage-calcular promedio aritmetico
function calculateArithmeticAverage(lista){
    
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){

            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}

function medianSalary(lista){
    const mitadLista= parseInt(lista.length/2);
    if(isEvenNumber(lista.length)){
        const element1=lista[mitadLista-1];
        const element2=lista[mitadLista];
        const promedioLista=calculateArithmeticAverage([
            element1,
            element2,
        ]);
        return  promedioLista;
    }else{
        const element1=lista[mitadLista];
        return element1;
    }
    
}

console.log(medianSalary(
    salaryColSorted
));