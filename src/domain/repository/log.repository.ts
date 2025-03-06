
import { LogEntities, LogSeverityLevel } from "../entities/log.entities";


export abstract class LogRepository{
  
    abstract saveLog( log: LogEntities): Promise<void>
    abstract getLog(severityLevel:LogSeverityLevel):Promise<LogEntities[]>

}