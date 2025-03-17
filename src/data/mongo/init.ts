import mongoose from 'mongoose';



// no se toman de las variables de entorno pues genera una dependencia oculta 

interface ConnectionOptions{
    mongoUrl:string;
    dbName:string;
    

}


export class MongoDatabase {


    static async connect(option:ConnectionOptions) {   
        const { mongoUrl,dbName }=option;

        try {
             console.log('',mongoUrl);
             mongoUrl
            await mongoose.connect( mongoUrl,{
                dbName:dbName,
                
            });

            console.log("MongoDB connected");
            
            
        } catch (error) {
           console.log(error);
           throw error ;
            

        }



    }


}