class validationDNI {
    /* Constants */
    validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    supportRexp = /^[EC]{1}[1-9][0-9]{0,7}$/i;
    pad = '00000000';
    
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
        if( !this.isNie() && !this.isNif) return false;

        if( this.validChars.charAt( parseInt(this.nieToNif(this.sanitize(this.dni)).substr(0,8)) % 23 ) ===  this.sanitize(this.dni).substr(-1)) return true;
        
        return false;
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
        return this.nifRexp.test( this.sanitize( this.dni ) );
    }

    /** 
     * @return {string} Return 'NIF', 'NIE' or 'INVALID'
     **/
    typeDNI() {
        if( !this.isValid() ) return 'INVALID'
        if( this.isNie() ) return 'NIE';
        if( this.isNif() ) return 'NIF';
    }
    
    /** 
     * @return {boolean} Return true if is valid Support Number for NIEs
     **/
    validSupportNumber() {
        return this.supportRexp
        .test( this.sanitize ( this.supportNumber ) )
    }

    /** 
     * @return {string} Return Support Number uppercased and filled with 0s
     **/
    sanitizeSupportNumber() {
        return this.supportNumber ? this.supportNumber.substr(0,1) + ( (this.pad + parseInt( this.supportNumber.substr(1, this.supportNumber.length - 1) )).slice( -8 ) ) : '';
    }
}

module.exports.validation = validationDNI