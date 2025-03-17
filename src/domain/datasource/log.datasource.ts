// se le coloca abstract debido a que no queremo que se hagan instancias de esta clase 

// ? clase astractas que establece las reglas para que un objecto pueda 
// ? ser considerado un Logdatasource o origen de datos para nuestros logs


import { LogEntities, LogSeverityLevel } from "../entities/log.entities";

// todo: error en nombre 
export abstract class Logdatasource {
  
    abstract saveLog( log: LogEntities): Promise<void>
    abstract getLog(severityLevel:LogSeverityLevel):Promise<LogEntities[]>

}
