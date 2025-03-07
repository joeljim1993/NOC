
import { Logdatasource } from "../../domain/datasource/log.datasource";
import { LogEntities, LogSeverityLevel } from '../../domain/entities/log.entities';
var fs = require('fs');

export class FileSystemDatasource implements Logdatasource{

    // readonly permite no poder editar la variable posteriormente 
    private readonly logPath = 'logs/';
    private readonly allLogsPath ='logs/logs-all.log';
    private readonly mediumLogsPath ='logs/logs-medium.log';
    private readonly highLogsPath ='logs/logs-high.log';

    constructor(){
        this.createLogsFile();
    }

    private createLogsFile =()=>{

        if(!fs.existsSync( this.logPath)){
            fs.mkdirSync( this.logPath );
        }

        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach( path =>{
            if( fs.existsSync(path , ''))return;

            fs.writeFileSync( path ,'');
        });

    }

    async saveLog(newlog: LogEntities): Promise<void> {

        const logAsJson = `${ JSON.stringify(newlog)}\n`;

        fs.appendFileSync ( this.allLogsPath, logAsJson)

        if( newlog.level === LogSeverityLevel.low) return;

        if( newlog.level === LogSeverityLevel.medium){
            fs.appendFileSync( this.mediumLogsPath,logAsJson )
        }else{
            fs.appendFileSync( this.highLogsPath,logAsJson )

        }
    }

private getLogsFromFile =( path:string):LogEntities[]=>{
    const content = fs.readFilesync(path ,'utf-8');
    const logs = content.split('\n').map(
        (log:string) => LogEntities.fromJson(log)
    ) 
    return logs;
}
 
   async getLog(severityLevel: LogSeverityLevel): Promise<LogEntities[]> {
        
        switch(severityLevel){
            case LogSeverityLevel.low:
                return this.getLogsFromFile( this.allLogsPath);
            
            case LogSeverityLevel.medium:
                return this.getLogsFromFile( this.mediumLogsPath);;
            
            case LogSeverityLevel.high:
                return this.getLogsFromFile( this.highLogsPath);;

            defaut:
            throw new Error(`${ severityLevel} not implemented`)
        }

    }





}