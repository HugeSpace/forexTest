$(document).ready(function() {


    //$("#submitBtn").click(function(event) {
    //    event.preventDefault();

        $("#signupSubmitFrm").change(function(){

            validate();

        });

function validate() {
    $("#nickError").hide();
    $("#typeError").hide();
    $("#ccyPairError").hide();
    $("#directionError").hide();
    $("#tradeDateError").hide();
    $("#valueDateError").hide();
    $("#legalEntityError").hide();
    $("#traderError").hide();

    $.ajax({   //тип запроса
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        type: "POST",

        url: '/receivePage?' + $("#signupSubmitFrm").serialize(),
        success: function (msg) {

            alert("WOW you are right");
        },
        error: function (xhr, ajaxOptions, thrownError) {


            if (xhr.responseJSON.message === 'typeError exists') {
                $("#nickError").hide();
                $("#typeError").show();
                $("#ccyPairError").hide();
                $("#directionError").hide();
                $("#tradeDateError").hide();
                $("#valueDateError").hide();
                $("#legalEntityError").hide();
                $("#traderError").hide();
            }
            if (xhr.responseJSON.message === 'ccyPairError exists') {
                $("#nickError").hide();
                $("#typeError").hide();
                $("#ccyPairError").show();
                $("#directionError").hide();
                $("#tradeDateError").hide();
                $("#valueDateError").hide();
                $("#legalEntityError").hide();
                $("#traderError").hide();
            }
            if (xhr.responseJSON.message === 'directionError exists') {
                $("#nickError").hide();
                $("#typeError").hide();
                $("#ccyPairError").hide();
                $("#directionError").show();
                $("#tradeDateError").hide();
                $("#valueDateError").hide();
                $("#legalEntityError").hide();
                $("#traderError").hide();
            }
            if (xhr.responseJSON.message === 'tradeDateError exists') {
                $("#nickError").hide();
                $("#typeError").hide();
                $("#ccyPairError").hide();
                $("#directionError").hide();
                $("#tradeDateError").show();
                $("#valueDateError").hide();
                $("#legalEntityError").hide();
                $("#traderError").hide();
            }
            if (xhr.responseJSON.message === 'valueDateError exists') {
                $("#nickError").hide();
                $("#typeError").hide();
                $("#ccyPairError").hide();
                $("#directionError").hide();
                $("#tradeDateError").hide();
                $("#valueDateError").show();
                $("#legalEntityError").hide();
                $("#traderError").hide();
            }
            if (xhr.responseJSON.message === 'legalEntityError exists') {
                $("#nickError").hide();
                $("#typeError").hide();
                $("#ccyPairError").hide();
                $("#directionError").hide();
                $("#tradeDateError").hide();
                $("#valueDateError").hide();
                $("#legalEntityError").show();
                $("#traderError").hide();
            }

            if (xhr.responseJSON.message === 'NickName exists') {
                $("#typeError").hide();
                $("#ccyPairError").hide();
                $("#directionError").hide();
                $("#tradeDateError").hide();
                $("#valueDateError").hide();
                $("#legalEntityError").hide();
                $("#traderError").hide();
                $("#nickError").show();
            }
            //логирование ошибки в консоль.
            console.log(xhr.responseJSON.message);

        }
    });
}

    //$("input[name='rate']").change(function(){
    //    var amountFirst = $("#amount1").val();
    //    console.log(amountFirst);
    //    var thisRate = $("#rate").val() ;
    //    console.log(thisRate);
    //    var change = (amountFirst * thisRate).toFixed(2);
    //    $("#amount2").html(change);
    //});
});
//$("#ccyPair").keyup(function() {
//    var currency = [
//        "USD",
//        "EUR",
//        "GBP",
//        "JPY",
//        "CHF",
//        "CNY",
//        "RUB",
//        "AED",
//        "AFN",
//        "ALL",
//        "AMD",
//        "AOA",
//        "ARS",
//        "AUD",
//        "AZN",
//        "BDT",
//        "BGN",
//        "BHD",
//        "etc"
//    ];
//    $("#ccyPair").autocomplete({
//        source: currency
//    });
//});
