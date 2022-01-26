export interface User {
    //Pode ter ou não um id
    id?: number;
    username: string;
    password: string;
    email: string;
    // role?: string;
    profileIMage?: string;
}