export type UserInfo = {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    uid: string;
    creationTime?: string;
    lastSignInTime?: string;
    emailVerified: boolean;
    city: string;
};
