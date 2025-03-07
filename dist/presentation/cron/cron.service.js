"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const cron_1 = require("cron");
// se usa patron adaptador para envolver dependencias de tercero , cron en este caso 
class CronService {
    static createJob(cronTime, ontick) {
        //se usa -cron- para ejecutar las tareas
        // trabajo equivalente usando el método estático "from", proporcionando parámetros como un objeto 
        const job = new cron_1.CronJob(cronTime, ontick);
        job.start();
        return job;
    }
}
exports.CronService = CronService;
