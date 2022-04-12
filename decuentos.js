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

function priceDiscount(){
    const inputPrice=document.getElementById("InputPrice").value;
    const inputDiscount=document.getElementById("InputDiscount").value|0;
    const inputCoupon=document.getElementById("InputCoupon").value;
    var priceDiscount =0;
    if(!inputCoupon==""){
        const  isCouponValueValid = function(coupons){
            return coupons.name===inputCoupon;
        }
        const userCoupon= coupons.find(isCouponValueValid);
        if(!userCoupon){
            document.getElementById("tdicount").innerText="Tu descuento no es valido";
        }
        priceDiscount=userCoupon.discount+inputDiscount;
        document.getElementById("tdicount").innerText="Tu descuento es de "+inputDiscount+"% cupon"+userCoupon.discount+"%";
    }else{
        priceDiscount=inputDiscount;
        document.getElementById("tdicount").innerText="Tu descuento es de "+inputDiscount;
    }

    const priceDiscountR=calcularPrecioConDescuento(inputPrice,priceDiscount);
    document.getElementById("ResultP").innerText="El Precio Con Descuento Son: "+priceDiscountR;
}   