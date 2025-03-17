

// ? reglas de negocio para nuestro logs

export enum LogSeverityLevel {
    low ='low',
    medium = 'medium',
    high = 'high'
}

 export interface LogEntityOptions {
    message:string;
    level:LogSeverityLevel;
    createdAt?:Date;
    origin:string;
}

export class LogEntities {

    public level: LogSeverityLevel;
    public message:string;
    public createdAt:Date;
    public origin:string;

    constructor(options:LogEntityOptions){
        
        const { level,message,origin,createdAt = new Date() } = options;

        this.message = message;
        this.level = level;
        this.createdAt = createdAt
        this.origin = origin;


    }
    // factory funtion ??

    static  fromJson =( json:string):LogEntities=>{

        const { message, level, createAt,origin} = JSON.parse(json);
       
        const log = new LogEntities({
            message:message,
            level:level,
            createdAt:createAt,
            origin:origin
        });
        
        console.log("log entidad", log);
        

        return log;

    }

    static fromObject=( object :{[key:string]:any}):LogEntities=>{

        const { message,level,createdAt,origin}  = object;

        const log = new LogEntities({
            message,level,createdAt,origin
        })

        return log;

    }

}