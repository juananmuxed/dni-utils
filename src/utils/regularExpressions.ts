export abstract class RegularExp {
  static readonly NIF: RegExp =
    /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  static readonly NIE: RegExp =
    /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  static readonly CIF: RegExp =
    /^[ABCDEFGHJKLMNPQRSUVW]{1}[0-9]{7}[0-9A-J]{1}$/i;
  static readonly CIF_EXTRA_01: RegExp = /[ABEH]/;
  static readonly CIF_EXTRA_02: RegExp = /[KPQS]/;
  static readonly SUPPORT: RegExp = /^[EC]{1}[1-9][0-9]{0,7}$/i;
}
