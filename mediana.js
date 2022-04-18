var lista=[];

//is Even Number - es nuemro par
function isEvenNumber(list){ 
    if(list.length % 2)
        return false;
    else{
        return true;
    }
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
//arraneges-ordenar
function arraneges(lista){
    lista.sort(function(a, b) {
        return a - b;
      });
}
function median(lista){
    arraneges(lista)
    const mitadLista= parseInt(lista.length/2);
    if(isEvenNumber(lista)){
        const element1=lista[mitadLista];
        const element2=lista[mitadLista-1];
        const promedioLista=calculateArithmeticAverage([
            element1,
            element2]
        );
        return  promedioLista;
    }else{
        const element1=lista[mitadLista];
        return element1;
    }
    
}
function medianCalculate(){
    const date=document.getElementById("InputMedian").value|0 ;
    lista.push(date);
    const mediandate=median(lista);
    document.getElementById("ResultMedian").innerText="Mediana : "+mediandate;
    document.getElementById("dataMedian").innerText="Datos: "+lista;
    document.getElementById("InputMedian").value=null;
}
function limpiar(){
    lista=[];
    document.getElementById("ResultMedian").innerText="" ;
    document.getElementById("InputMedian").value=null;
    document.getElementById("dataMedian").innerText="";
}