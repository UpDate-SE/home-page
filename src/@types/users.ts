export type LoginCredentials = {
    email: string;
    password: string;
}

export interface UserDoc {
    _id: string;
    name: string;
    email: string;
    password: string;
    card: string | null;
    isAdmin: boolean;
}