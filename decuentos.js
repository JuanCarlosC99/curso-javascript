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

const coupons=[
    {
        name:"Noesunreloj",
        discount: 50
    },
    {
        name:"Cupon",
        discount: 5
    },
    {
        name:"Dame Un Descuento",
        discount: 10
    },
    {
        name:"12345",
        discount: 25
    },
];

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function pricediscount(){
    const inputPrice=document.getElementById("InputPrice").value;
    const couponValue=document.getElementById("InputCoupon").value;
   
    const  isCouponValueValid = function(coupons){
        return coupons.name===couponValue;
    }
    const userCoupon= coupons.find(isCouponValueValid);

    if(!userCoupon){
        document.getElementById("tdicount").innerText="Tu descuento no es valido";
    }
    const priceDiscount=calcularPrecioConDescuento(inputPrice,userCoupon.discount);
    document.getElementById("tdicount").innerText="Tu descuento es de "+userCoupon.discount+"%";
    document.getElementById("ResultP").innerText="El Precio Con Descuento Son: "+priceDiscount;
}   