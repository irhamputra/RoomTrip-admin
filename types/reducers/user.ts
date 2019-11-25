export type UserState = {};
export type UserActions =
    | { type: 'LOGIN'; payload: object }
    | { type: 'BLOB_USER'; payload: object }
    | { type: 'UPDATE_PAYPAL'; payload: string }
    | { type: 'UPDATE_PROFILE_PICTURE'; payload: object }
    | { type: 'LOGOUT' }
    | { type: 'UPDATE_FORM'; payload: object }
    | { type: 'REGISTER'; payload: object }
    | { type: 'ERROR_NO_ACCOUNT'; payload: object };
