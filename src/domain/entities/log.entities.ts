
export enum LogSeverityLevel {
    low ='low',
    medium = 'medium',
    high = 'high'
}

export class LogEntities {

    public level: LogSeverityLevel;
    public message:string;
    public createdAt:Date;

    constructor(
        message:string,
        level: LogSeverityLevel 
    ){
        this.message = message;
        this.level = level;
        this.createdAt = new Date();


    }

    static  fromJson =( json:string):LogEntities=>{
        const { message, level, createAt} = JSON.parse(json);
       
        const log = new LogEntities(message,level);
        log.createdAt = new Date(createAt);

        return log;

    }

}