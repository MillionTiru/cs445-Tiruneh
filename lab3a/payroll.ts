enum taxRate {
    FICA,
    STATE,
    MEDICARE
};
enum taxRateValue {

    FICA = 10,
    STATE = 5,
    MEDICARE = 12
};
let taxForFICA: taxRateValue = taxRateValue.FICA;
console.log(taxForFICA);
let taxForSTATE: taxRateValue = taxRateValue.STATE;
console.log(taxForSTATE);
let taxForMED: taxRateValue = taxRateValue.MEDICARE;
console.log(taxForMED);

