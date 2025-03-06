import { Logdatasource } from "../../domain/datasource/log.datasource";
import { LogEntities, LogSeverityLevel } from "../../domain/entities/log.entities";
import { LogRepository } from "../../domain/repository/log.repository";

// la idea es hacer el cambio de data source desde aqui , ejemplo usando mongo o usnado postgres
export class LogRepositoryImpl  implements LogRepository{

    constructor(
        private readonly logDataSource:Logdatasource
    ){}


    async saveLog(log: LogEntities): Promise<void> {

       return  this.logDataSource.saveLog(log);
    }
    async  getLog(severityLevel: LogSeverityLevel): Promise<LogEntities[]> {
        
        return this.logDataSource.getLog( severityLevel);


    }

}