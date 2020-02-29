export class StatusError extends Error{
    private _statusCode: number;
    private _userMessage: string;
    constructor(statusCode:number, message:string){
        super();
        this._statusCode = statusCode;
        this._userMessage = message;
    }

    public get statusCode() : number {
        return this._statusCode;
    }
    public get userMessage() : string {
        return this._userMessage;
    }
}
export default {
    notFound:(message:string = "Not Found")=>{return new StatusError(404,message) },
    badRequest:(message:string ="Bad Request")=>{return new StatusError(400,message) },
    //TODO add more common situations
};