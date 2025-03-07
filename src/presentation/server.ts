import { CheckService } from "../domain/use-case/checks/check-service";
import { CronService } from "./cron/cron.service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.implementation";
import { FileSystemDatasource } from "../infrastructure/datasource/dile-sytem.datasource";
import { Emailservice } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-case/email/email/sent-logs";


const fileSystemLogRepository = new LogRepositoryImpl(
	// en esta parte luego podemos cambiar el datasource por postgres o mongo ...
	new FileSystemDatasource()
);
const emailService = new Emailservice();

export class Server {

    public static start(){
        console.log('server started...');
		
		// aqui enviaremos los email
		new SendEmailLogs(
			emailService,
			fileSystemLogRepository
		).execute([
			// 'joel_jimenez@live.com',
			// 'jj284019@gmail.com',
			// 'jj22233284019@gmail.com'

		])


        // CronService.createJob(
		// 	'*/5 * * * * *',
		// 	()=>{
		// 		const url = 'https://google.com'
		// 		// new CheckService().execute('https://google.com');
		// 		new CheckService(
		// 			fileSystemLogRepository,
		// 			()=> console.log(` ${ url } is ok `),
		// 			(error)=> console.log(error )
					
					
		// 		).execute(url );

		// 	}
		// );
    } 
}