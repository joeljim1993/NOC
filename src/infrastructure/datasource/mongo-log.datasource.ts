import { LogModel } from "../../data/mongo";
import { Logdatasource } from "../../domain/datasource/log.datasource";
import { LogEntities, LogSeverityLevel } from "../../domain/entities/log.entities";


export class MongoLogDataSource implements Logdatasource{


    
    async saveLog(log: LogEntities): Promise<void> {
        // esto es suficiente para crear y guardar 
        const newLog = await LogModel.create(log);
        console.log('Mongo log created ', newLog.id);
        

    }
   async  getLog(severityLevel: LogSeverityLevel): Promise<LogEntities[]> {

        const logs = await LogModel.find({
            level: severityLevel
        });

        return logs.map( mongoLog => LogEntities.fromObject( mongoLog));

    }

   
    
}