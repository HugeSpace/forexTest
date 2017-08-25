$(document).ready(function() {
    var curr= [
        "USD", "EUR", "GBP", "JPY", "CHF", "CNY", "RUB", "AED", "AFN", "ALL", "AMD", "AOA", "ARS", "AUD",
        "AZN", "BDT", "BGN", "BHD", "BGN", "BHD", "BIF", "BND", "BOB", "BRL", "BWP", "BYN", "CAD", "CDF",
        "CLP", "COP", "CRC", "CUP", "CZK", "DJF", "DKK", "DZD"," EGP", "ETB", "GEL", "GHS", "GMD", "GNF",
        "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JOD", "KES", "KGS", "KHR", "KPW",
        "KRW", "KWD", "KZT", "LAK", "LBP", "LKR", "LYD", "MAD", "MDL", "MGA", "MKD", "MNT", "MRO", "MUR",
        "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PEN", "PHP", "PKR",
        "PLN", "PYG", "QAR", "RON", "RSD", "SAR", "SCR", "SDG", "SEK", "SGD", "SLL", "SOS", "SRD", "SYP",
        "SZL", "THB", "TJS", "TMT", "TND", "TRY", "TWD", "TZS", "UGX", "UYU", "UZS", "VEF", "VND", "XAF",
        "XOF", "UAH", "YER", "ZAR", "ZMK" ];
    $('#ccyPair').keyup(function(){
        var t = $(this).val();
        t = t.toUpperCase();
        var sovp = [];
        if(t.length>0 && t.length<=3){
            curr.forEach(function(item,i,arr){
                var reg = new RegExp('^'+t,'g');
                if(reg.test(item)) sovp.push(item);
            })
        } else if (t.length>3 && t.length<=6){
            curr.forEach(function(item,i,arr){
                var reg = new RegExp('^'+t.substr(3),'g');
                if(reg.test(item)) sovp.push(item);
            })
        }

        $('#ccyPairError').html(sovp.length ? sovp.join() : 'Enter couple');
    });

    $("#rate").keyup(function(){
        var amountFirst = $("#amount1").val();
        var thisRate = $("#rate").val() ;
        var change = (amountFirst * thisRate).toFixed(2);
        $("#amount2").val(change);
    });
    $('#amount1').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9.]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $('#rate').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9.]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
});

//$("#amount1").validate({
//    rules:{
//        field: {
//            required: true,
//            number: true
//        }
//    }
//})