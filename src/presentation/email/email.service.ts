import nodemailer from 'nodemailer';
import { envs } from '../../config/env.plugin';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?:Attachement[]
   
}

interface Attachement {
    filename: string;
    path: string;
}
  



export class Emailservice {



    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
        
            
    });

    async sendEmail(options:SendMailOptions):Promise<boolean>{

        const { to, subject, htmlBody, attachements= []} = options;

        try {
            
            const sentInformation= await this.transporter.sendMail({
                from: envs.MAILER_EMAIL,
                to,
                subject,
                html: htmlBody,
                // envio de archivo adjunto
                attachments: attachements
            });

            console.log('sentInformation',sentInformation);
            

            return true;
        } catch (error) {

            console.log(error);
            return false;
        }


    }

    async sendEmailWithFileSystemLogs(to: string | string[]){
        const subject = 'log de sistema ';
        const htmlBody = '<h1>test desde nodemail</h1>';
        const attachements:Attachement[] = [
            {
                filename: 'logs-all.log',   
                path: './logs/logs-all.log'
            }
        ]

        return this.sendEmail({to, subject, htmlBody, attachements
        });

    }


}