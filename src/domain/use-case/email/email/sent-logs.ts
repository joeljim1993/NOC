import { Emailservice } from '../../../../presentation/email/email.service';
import { LogEntities, LogSeverityLevel } from '../../../entities/log.entities';
import { LogRepository } from '../../../repository/log.repository';



interface SendLogEmailUseCase{
    execute:(to:string | string[])=>Promise<boolean>
}

export class SendEmailLogs implements SendLogEmailUseCase{

    constructor(
        private readonly emailService:Emailservice,
        private readonly logRepository:LogRepository
    ){}

    async execute(to: string | string[]) {

        try {
           const sent = await this.emailService.sendEmailWithFileSystemLogs(to);
           if(!sent){
               throw new Error('Email log not sent');
           }

           const log = new LogEntities({
            message:`log email send `,
            level:LogSeverityLevel.high,
            origin:'send-email-logs.ts'
        });
        this.logRepository.saveLog(log);

        return true 

        } catch (error) {   
            
            const log = new LogEntities({
                message:`${error}`,
                level:LogSeverityLevel.high,
                origin:'send-email-logs.ts'
            });

            this.logRepository.saveLog(log);
            return false;
            
        }
       
    }
    
}