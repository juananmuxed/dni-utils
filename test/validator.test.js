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
const nifs = [
    {dni: 'A15357692', province: 'La Coruña', type: 'Sociedad anónima'},
    {dni: 'U09973447', province: 'Burgos', type: 'Unión Temporal de Empresas'},
    {dni: 'N7373359D', province: 'Murcia', type: 'Entidad no residente'}
];
const support = [
    {sn: 'E3', sanitize: 'E00000003', valid: true},
    {sn: 'E00000001', sanitize: 'E00000001', valid: true},
    {sn: 'e00000001', sanitize: 'E00000001', valid: true},
    {sn: 'saf', sanitize: '', valid: false},
    {sn: '', sanitize: '', valid: false},
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

describe('Checking Support validity', () => {
    support.forEach(test => {
        const testType = new validator(null,test.sn);
        it('Check validity of "' + test.sn + '" expecting "' + test.valid + '"', () =>{
            expect(testType.validSupportNumber()).toBe(test.valid);
        });
    });
});

describe('Checking Support sanitize', () => {
    support.forEach(test => {
        const testType = new validator(null,test.sn);
        it('Check validity of "' + test.sn + '" expecting "' + test.sanitize + '"', () =>{
            expect(testType.sanitizeSupportNumber()).toBe(test.sanitize);
        });
    });
});

describe('Checking Data NIF province', () => {
    nifs.forEach(test => {
        const testType = new validator(test.dni);
        it('Check province of "' + test.dni + '" expecting "' + test.province + '"', () =>{
            expect(testType.dataNif().province).toBe(test.province);
        });
    });
});

describe('Checking Data NIF type', () => {
    nifs.forEach(test => {
        const testType = new validator(test.dni);
        it('Check bussines type of "' + test.dni + '" expecting "' + test.type + '"', () =>{
            expect(testType.dataNif().society).toBe(test.type);
        });
    });
});