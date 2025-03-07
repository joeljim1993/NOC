"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const check_service_1 = require("../domain/use-case/checks/check-service");
const cron_service_1 = require("./cron/cron.service");
const log_repository_implementation_1 = require("../infrastructure/repositories/log.repository.implementation");
const dile_sytem_datasource_1 = require("../infrastructure/datasource/dile-sytem.datasource");
const fileSystemLogRepository = new log_repository_implementation_1.LogRepositoryImpl(
// en esta parte luego podemos cambiar el datasource por postgres o mongo ...
new dile_sytem_datasource_1.FileSystemDatasource());
class Server {
    static start() {
        console.log('server started...');
        // aqui enviaremos los email
        cron_service_1.CronService.createJob('*/5 * * * * *', () => {
            const url = 'https://google.com';
            // new CheckService().execute('https://google.com');
            new check_service_1.CheckService(fileSystemLogRepository, () => console.log(` ${url} is ok `), (error) => console.log(error)).execute(url);
        });
    }
}
exports.Server = Server;
