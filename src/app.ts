


import { envs } from './config/env.plugin';
import { Server} from './presentation/server'


//funcion autoejecutada 
(async()=>{

    await main();

})()


function main(){
    // Server.start();
    console.log( envs);
    
}