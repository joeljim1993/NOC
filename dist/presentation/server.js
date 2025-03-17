"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const log_repository_implementation_1 = require("../infrastructure/repositories/log.repository.implementation");
const dile_sytem_datasource_1 = require("../infrastructure/datasource/dile-sytem.datasource");
const email_service_1 = require("./email/email.service");
const sent_logs_1 = require("../domain/use-case/email/email/sent-logs");
const fileSystemLogRepository = new log_repository_implementation_1.LogRepositoryImpl(
// en esta parte luego podemos cambiar el datasource por postgres o mongo ...
new dile_sytem_datasource_1.FileSystemDatasource());
const emailService = new email_service_1.Emailservice();
class Server {
    static start() {
        console.log('server started...');
        // aqui enviaremos los email
        new sent_logs_1.SendEmailLogs(emailService, fileSystemLogRepository).execute([
        // 'joel_jimenez@live.com',
        // 'jj284019@gmail.com',
        // 'jj22233284019@gmail.com'
        ]);
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
exports.Server = Server;
