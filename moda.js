
let arr = [];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    );
}
function ordenar(arr){
    arr.sort((a,b)=> a-b);
}
function modaCalculate(){
    const dato=document.getElementById("InputModa").value|0;
    arr.push(dato);
    console.log(arr);
}
function modaCalculate(){
    const date=document.getElementById("InputModa").value|0 ;
    arr.push(date);
    modadate=mode(arr);    
    document.getElementById("ResultModa").innerText="Moda : "+modadate[modadate.length-1];
    ordenar(arr);
    document.getElementById("dataModa").innerText="Datos: "+arr;
    document.getElementById("InputModa").value=null;
}
function limpiar(){
    arr=[];
    document.getElementById("ResultModa").innerText="" ;
    document.getElementById("InputModa").value=null;
    document.getElementById("dataModa").innerText="";
}