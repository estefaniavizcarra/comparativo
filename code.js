
window.onload = function () {
   

    var input = document.querySelector('#mrr');

    input.addEventListener('input', function () {
        console.log('input changed to: ', input.value);

        // 
        var inputmensual = input.value
        var preciopordoce = inputmensual * 12
        var inputmensualmx = inputmensual*20

        // PRECIOS 2 AÑOS
        var total2años = preciopordoce * 2
        var descuento2años = total2años * .24 //ahorro total
        var total2añoscondescuento = total2años - descuento2años
        var pesosmexicanos2años = total2añoscondescuento * 20
        var pesosmexicanos2añosconiva = pesosmexicanos2años * 1.16
        var precioalmes2 = pesosmexicanos2años/24

        var precioenpesossiniva = preciopordoce * 20
        console.log(preciopordoce, precioenpesossiniva, total2añoscondescuento, pesosmexicanos2añosconiva, precioalmes2)

        // PRECIOS 3 AÑOS
        var total3años = preciopordoce * 3
        var descuento3años = total3años * .28 //ahorro total
        var total3añoscondescuento = total3años - descuento3años
        var pesosmexicanos3años = total3añoscondescuento * 20
        var pesosmexicanos3añosconiva = pesosmexicanos3años * 1.16
        var precioalmes3 = pesosmexicanos3años/36


        var precioenpesossiniva = preciopordoce * 20
        console.log(preciopordoce, precioenpesossiniva, total3añoscondescuento, pesosmexicanos3añosconiva, precioalmes3)

        // PRECIOS 4 AÑOS
        var total4años = preciopordoce * 4
        var descuento4años = total4años * .32 //ahorro total
        var total4añoscondescuento = total4años - descuento4años
        var pesosmexicanos4años = total4añoscondescuento * 20
        var pesosmexicanos4añosconiva = pesosmexicanos4años * 1.16
        var precioalmes4 = pesosmexicanos4años/48


        var precioenpesossiniva = preciopordoce * 20
        console.log(preciopordoce, precioenpesossiniva, total4añoscondescuento, pesosmexicanos4añosconiva, precioalmes4)




        // PRECIOS 5 AÑOS
        var total5años = preciopordoce * 5
        var descuento5años = total5años * .35
        var total5añoscondescuento = total5años - descuento5años
        var pesosmexicanos5años = total5añoscondescuento * 20
        var pesosmexicanos5añosconiva = pesosmexicanos5años * 1.16
        var precioalmes5 = pesosmexicanos5años/60


        var precioenpesossiniva = preciopordoce * 20
        console.log(preciopordoce, precioenpesossiniva, total5añoscondescuento, pesosmexicanos4añosconiva, precioalmes5)


        // PAGOS TOTALES
        $("a.pagototal2").html(Math.round(pesosmexicanos2añosconiva))
        $("a.pagototal3").html(Math.round(pesosmexicanos3añosconiva))
        $("a.pagototal4").html(Math.round(pesosmexicanos4añosconiva))
        $("a.pagototal5").html(Math.round(pesosmexicanos5añosconiva))

        $("a.pagototal2").formatCurrency({ roundToDecimalPlace: 2 })
        $("a.pagototal3").formatCurrency({ roundToDecimalPlace: 2 })
        $("a.pagototal4").formatCurrency({ roundToDecimalPlace: 2 })
        $("a.pagototal5").formatCurrency({ roundToDecimalPlace: 2 })
        //PAGOS AL MES
        $("span.precioalmes").html(Math.round(inputmensualmx))
        $("span.precioalmes2").html(Math.round(precioalmes2))
        $("span.precioalmes3").html(Math.round(precioalmes3))
        $("span.precioalmes4").html(Math.round(precioalmes4))
        $("span.precioalmes5").html(Math.round(precioalmes5))






    
    });
 


}
