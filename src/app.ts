
import { envs } from './config/env.plugin';
import { Server} from './presentation/server'


(async()=>{

    await main();

})()


function main(){
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