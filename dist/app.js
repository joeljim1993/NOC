"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_plugin_1 = require("./config/env.plugin");
const init_1 = require("./data/mongo/init");
const mongo_1 = require("./data/mongo");
require('dotenv').config();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
}))();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield init_1.MongoDatabase.connect({
            mongoUrl: env_plugin_1.envs.MONGO_DB_URL,
            dbName: env_plugin_1.envs.MONGO_DB_NAME,
        });
        // crear una coleccion =tables , documento = registro     
        const newLog = yield mongo_1.LogModel.create({
            message: 'test message desde mongo',
            origin: 'App.ts',
            level: 'low'
        });
        yield newLog.save();
        console.log(newLog);
        // Server.start();
    });
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
