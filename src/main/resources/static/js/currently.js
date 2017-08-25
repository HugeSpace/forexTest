$(function() {
    var currency = [
        "USD",
        "EUR",
        "GBP",
        "JPY",
        "CHF",
        "CNY",
        "RUB",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "AOA",
        "ARS",
        "AUD",
        "AZN",
        "BDT",
        "BGN",
        "BHD",
        "etc"
    ];
    $("#ccyPair").autocomplete({
        source: currency
    });
});
