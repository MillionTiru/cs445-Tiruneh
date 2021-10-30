var taxRate;
(function (taxRate) {
    taxRate[taxRate["FICA"] = 0] = "FICA";
    taxRate[taxRate["STATE"] = 1] = "STATE";
    taxRate[taxRate["MEDICARE"] = 2] = "MEDICARE";
})(taxRate || (taxRate = {}));
;
var taxRateValue;
(function (taxRateValue) {
    taxRateValue[taxRateValue["FICA"] = 10] = "FICA";
    taxRateValue[taxRateValue["STATE"] = 5] = "STATE";
    taxRateValue[taxRateValue["MEDICARE"] = 12] = "MEDICARE";
})(taxRateValue || (taxRateValue = {}));
;
var taxForFICA = taxRateValue.FICA;
console.log(taxForFICA);
var taxForSTATE = taxRateValue.STATE;
console.log(taxForSTATE);
var taxForMED = taxRateValue.MEDICARE;
console.log(taxForMED);
