import { PrismaClient, SeverityLevel } from "@prisma/client";
import { Logdatasource } from "../../domain/datasource/log.datasource";
import { LogEntities, LogSeverityLevel } from "../../domain/entities/log.entities";


const prismaClient = new PrismaClient();


const severityEnum ={
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH,
}


export class PostgresLogDatasource implements Logdatasource {

   async saveLog(log: LogEntities): Promise<void> {

    // ? que hace este codigo ???
    
    const level = severityEnum[log.level];

    const newLog = await prismaClient.logModel.create({
        data:{
            ...log,
            level
        }
    })

    }
    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntities[]> {
        
        const level = severityEnum[severityLevel];
        const dbLogs = await prismaClient.logModel.findMany({
            where:{
                level: level 
            }
        })

        return dbLogs.map( dbLog => LogEntities.fromObject(dbLog ))

    }
    
}