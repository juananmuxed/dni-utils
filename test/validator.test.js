const { validator } = require('./../src/classes/validator');
const validations = [
    {dni: '61084710E', check: 'NIF', valid: true},
    {dni: '61084710e', check: 'NIF', valid: true},
    {dni: 'Z9317020R', check: 'NIE', valid: true},
    {dni: '', check: 'INVALID', valid: false},
    {dni: 'A15357692', check: 'CIF', valid: true},
    {dni: 'U09973447', check: 'CIF', valid: true},
    {dni: 'N7373359D', check: 'CIF', valid: true},
    {dni: 'hello', check: 'INVALID', valid: false}
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