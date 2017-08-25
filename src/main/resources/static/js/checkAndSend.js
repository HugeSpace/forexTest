$(document).ready(function() {


    //$("#submitBtn").click(function(event) {
    //    event.preventDefault();

        $("#signupSubmitFrm").change(function(){

            validate();

        });

function validate() {

    $(".blockError").hide();

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
            $(".blockError").hide();
            switch(xhr.responseJSON.message) {
                case 'typeError exists': $("#typeError").show(); break;
                case 'AmountRate null' : $("#amountError").show(); break;
                case 'tradeDateError' : $("#tradeDateError").show(); break;
                case 'valueDateError' : $("#valueDateError").show(); break;
                case 'legalEntityError not exists' : $("#legalEntityError").show(); break;
                case 'Trader not exists' : $("#traderError").show(); break;
                case 'NickName exists' : $("#nickError").show(); break;
                case 'ccyPairError error' : $("#ccyPairErrorJava").show(); break;
            }
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
