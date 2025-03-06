// se le coloca abstract debido a que no queremo que se hagan instancias de esta clase 

import { LogEntities, LogSeverityLevel } from "../entities/log.entities";


export abstract class Logdatasource {
  
    abstract saveLog( log: LogEntities): Promise<void>
    abstract getLog(severityLevel:LogSeverityLevel):Promise<LogEntities[]>

}
