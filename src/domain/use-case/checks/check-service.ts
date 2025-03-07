
//caso de uso : un codigo especializado en una tarea 

import { LogEntities, LogSeverityLevel } from "../../entities/log.entities";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase{
    execute( url:string):Promise<boolean>
}

type SuccessCallback = (() => void)|undefined;
type ErrorCallback = ((error:string) => void)|undefined;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback:SuccessCallback,
        private readonly errorCallback:ErrorCallback
    ){

    }

    public async execute( url:string ):Promise<boolean>{

        try {
 
            const req = await fetch( url );
            
            if(!req.ok){
                throw new Error(`Error on check service ${ url }`)
            }

            const log =new LogEntities({
                message:`Service ${ url } working`,
                level:LogSeverityLevel.low,
                origin:'CheckService',
            });
            this.logRepository.saveLog( log);

            this.successCallback && this.successCallback();
            console.log(`${url} esta funcionando `);
            
            
        } catch (error) {

            const errorMessage =`${error}`;
            const log =new LogEntities({
                message:`Service ${ url } not working`,
                level:LogSeverityLevel.high,
                origin:'CheckService',
            });
            this.logRepository.saveLog(log);

            this.errorCallback && this.errorCallback(errorMessage);
            return false;
        }

        return true;

    }



}