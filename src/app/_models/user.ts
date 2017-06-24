export class User {

}
export class Register{
    id: number;
    username: string;
    email: string;
    password:string;    
}
export class Login{
    constructor(id, username, password){
            this.id = id;
            this.username = username;
            this.password = password;
    }
        id: number;
        username: string;    
        password:string;    
     
        
}
export class ForgotPassword{
        id:number;
}