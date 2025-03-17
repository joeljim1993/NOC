
import { envs } from './config/env.plugin';
import { MongoDatabase } from './data/mongo/init';
import { Server} from './presentation/server'
require('dotenv').config();


(async()=>{

    await main();

})()


async  function main(){

    // !conectar a DB mongo 

   await MongoDatabase.connect({
    mongoUrl: envs.MONGO_DB_URL,
    dbName: envs.MONGO_DB_NAME,
   });

   Server.start();
    
}



/** 
 * config: cosas u objecto que son globales y que se pueden usar en cualquier parte de la aplicacion
 * domain (dominio):reglas con las cuales quiero regir la aplicacion a un nivel macro 
 * ** origenes de datos
 * ** como lucen mis modelos o entidades 
 * ** reglas de negocio
 * ** casos de uso
 * infrastructure: es la capa que se encarga de la persistencia de los datos filesystem-mongo-postgres
 * presentation: es la capa que se encarga de la interaccion con el usuario o la consola */



//     const newLog = await LogModel.create({
//         message: 'test message desde mongo',
//         origin : 'App.ts',
//         level : 'low'
//     })

//     await newLog.save();

//     console.log(newLog);

    // !traer colecciones de Db en mongo

    // const logs = await LogModel.find();

    // console.log(logs);

    // !buscar coleccion por id 
    
    // const logs = await LogModel.findById('67d1f9129ea93db6de050b8d');

    // console.log("find",logs);
