//const precioOriginial =120;
//const descuento =18;
//const porcentajePrecioConDescuento=100-descuento;
//const precioConDescuento=(precioOriginial*porcentajePrecioConDescuento)/100;

// console.log({
//     precioOriginial,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function pricediscount(){
    const inputPrice=document.getElementById("InputPrice").value;
    const inputDiscount=document.getElementById("InputDiscount").value;
    const priceDiscount=calcularPrecioConDescuento(inputPrice,inputDiscount);
    document.getElementById("ResultP").innerText="El Precio Con Descuento Son: "+priceDiscount;
}