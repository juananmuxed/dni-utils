const { validator } = require('./../classes/validator');
const validations = [
    {dni: '48473442E', check: 'NIF', valid: true},
    {dni: 'X422D2242', check: 'INVALID', valid: false},
    {dni: '', check: 'INVALID', valid: false},
    {dni: '48473442', check: 'INVALID', valid: false},
    {dni: '48473442e', check: 'NIF', valid: true},
    {dni: 'X55555555', check: 'INVALID', valid: false},
    {dni: 'S44444444', check: 'INVALID', valid: false}
];
describe('Checking DNI Type', () => {
    validations.forEach(test => {
        const testType = new validator(test.dni);
        it('Check type of "' + test.dni + '" expecting "' + test.check + '"', () =>{
            expect(testType.typeDNI()).toBe(test.check);
        });
    });
});

describe('Checking DNI validity', () => {
    validations.forEach(test => {
        const testType = new validator(test.dni);
        it('Check validity of "' + test.dni + '" expecting "' + test.valid + '"', () =>{
            expect(testType.isValid()).toBe(test.valid);
        });
    });
});