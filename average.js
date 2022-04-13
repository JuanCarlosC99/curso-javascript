
var lista=[];
function calcularPromedioAritmetica(lista){
    
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){

            return valorAcumulado+nuevoElemento;
        }
    );
    // let sumaLista= 0;
    // for(let i=0; i<lista.length;i++){
    //     sumaLista+=lista[i];
    // // }

    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}
function averageCalculate(){
    const dataCal=document.getElementById("InputAverage").value|0;
    document.getElementById("InputAverage").value=null;
    lista.push(dataCal);
    let datos="";
    for (let data of lista.values()) {
        datos+="["+data+"]";
      }
    const promedioR=calcularPromedioAritmetica(lista);
    document.getElementById("dataAverage").innerText="Datos: "+datos;
    document.getElementById("ResultAverage").innerText="Promedio: "+promedioR ;
    
}
function limpiar(){
    lista=[];
    document.getElementById("ResultAverage").innerText="" ;
    document.getElementById("InputAverage").value=null;
    document.getElementById("dataAverage").innerText="";
}