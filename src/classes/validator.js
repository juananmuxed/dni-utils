class validationDNI {
    /* Constants */
    validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    cifLetters = 'JABCDEFGHI';
    nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    cifRexp = /^[ABCDEFGHJKLMNPQRSUVW]{1}[0-9]{7}[0-9A-J]{1}$/i;
    cifRexp01 = /[ABEH]/;
    cifRexp02 = /[KPQS]/;
    supportRexp = /^[ECec]{1}[0-9]{0,8}$/i;
    noResident = '00';
    pad = '00000000';
    provinces = require('./../config/provinces.json');
    bussiness = require('./../config/btypes.json');
    
    /**
     * @param {string} dni Documento Nacional de Identidad
     * @param {string} supportNumber Needed in NIEs checks
     */
    constructor ( dni , supportNumber ) {
        this.dni = dni;
        this.supportNumber = supportNumber;
    }

    get dni() {
        return this._dni;
    }

    set dni( v ) {
        this._dni = v;
    }

    get supportNumber() {
        return this._supportNumber;
    }

    set supportNumber( v ) {
        this._supportNumber = v;
    }
    
    /**
     * @return {boolean} Valid Nif or Nie
     */
    isValid() {
        if( !this.isNie() && !this.isNif() && !this.isCif()) return false;
        return true;
    }
    
    /** 
     * @param {string} string
     * @returns {string} Sanitized String Uppercased
     **/
    sanitize( string ) {
        return string ? string.toString().toUpperCase() : '';
    }
    
    /** 
     * @param {string} string
     * @return {string} NIE converted to NIF to check
     **/
    nieToNif( string ) {
        return string
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');
    }
    
    /** 
     * @return {boolean} Return true if is NIE
     **/
    isNie() {
        return this.nieRexp.test( this.sanitize( this.dni ) );
    }
    
    /** 
     * @return {boolean} Return true if is NIF
     **/
    isNif() {
        return this.nifRexp.test( this.sanitize( this.dni ) ) && this.validChars.charAt( parseInt(this.nieToNif(this.sanitize(this.dni)).substr(0,8)) % 23 ) ===  this.sanitize(this.dni).substr(-1);
    }

    /** 
     * @return {boolean} Return true if is CIF
     **/
    isCif() {
        if ( !this.cifRexp.test( this.sanitize( this.dni ) ) ) return false;
        
        const calculation = this.dni.substr(1,7).split('').reduce( ( acc, cur, i ) => {
            return i % 2 === 0 ? acc += parseInt(cur)*2 < 10 ? parseInt(cur)*2 : (parseInt(cur)*2) - 9 : acc += parseInt(cur);
        }, 0);
        const calculationDigit = (10 - (calculation).toString().substr(-1))
        const calculationLetter = this.cifLetters.substr( calculationDigit, 1 );

        if( this.dni.substr(0,1).match( this.cifRexp01 ) || this.dni.substr(1,2) == this.noResident) return this.dni.substr(8,1) == calculationDigit;
        else if( this.dni.substr(0,1).match( this.cifRexp02 )) return this.dni.substr(8,1) == calculationLetter;
        else return this.dni.substr(8,1) == calculationDigit || this.dni.substr(8,1) == calculationLetter;
    }
    /** 
     * @return {Object} Return an Object with society type and province
     **/
    dataNif() {
        if( ! this.isCif() ) return false;
        let letter = this.dni.substr(0,1), province = this.dni.substr(1,2);
        for (let i = 0; i < this.provinces.length; i++) {
            for (let x = 0; x < this.provinces[i].n.length; x++) {
                if(this.provinces[i].n[x] == province ) province = this.provinces[i].p;
            }
        }
        return new Object({society: this.bussiness.filter(b => b.ch == letter)[0].n, province: province})
    }

    /** 
     * @return {string} Return 'NIF', 'NIE', 'CIF' or 'INVALID'
     **/
    typeDNI() {
        if( !this.isValid() ) return 'INVALID'
        if( this.isCif() ) return 'CIF';
        if( this.isNie() ) return 'NIE';
        if( this.isNif() ) return 'NIF';
    }
    
    /** 
     * @return {boolean} Return true if is valid Support Number for NIEs
     **/
    validSupportNumber() {
        return this.supportRexp
        .test( this.supportNumber )
    }

    /** 
     * @return {string} Return Support Number uppercased and filled with 0s
     **/
    sanitizeSupportNumber() {
        return this.validSupportNumber( this.supportNumber ) ? this.supportNumber.substr(0,1).toUpperCase() + ( (this.pad + parseInt( this.supportNumber.substr(1, this.supportNumber.length - 1) )).slice( -8 ) ) : '';
    }
}

module.exports.validator = validationDNI