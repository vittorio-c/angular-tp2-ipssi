export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    drinkPref: string,
    hobbies?: string[]
}
