import {  CronJob, CronTime  }  from 'cron' ;

type Crontime = string | Date;
type Ontick =()=> void;


// se usa patron adaptador para envolver dependencias de tercero , cron en este caso 

export class CronService {

    static createJob(cronTime:Crontime,ontick:Ontick){

         //se usa -cron- para ejecutar las tareas
        // trabajo equivalente usando el método estático "from", proporcionando parámetros como un objeto 
        const job = new CronJob( cronTime, ontick)


    job.start();

    return job; 

    }


}