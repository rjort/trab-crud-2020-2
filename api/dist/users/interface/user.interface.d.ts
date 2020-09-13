import { Document } from 'mongoose';
export interface User extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly genre: string;
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly phone: string;
    readonly birthday: string;
    readonly payment: boolean;
    readonly created_at: Date;
}
