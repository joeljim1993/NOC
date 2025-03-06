"use strict";
//caso de uso : un codigo especializado en una tarea 
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
exports.CheckService = void 0;
const log_entities_1 = require("../../entities/log.entities");
class CheckService {
    constructor(logRepository, successCallback, errorCallback) {
        this.logRepository = logRepository;
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
    }
    execute(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = yield fetch(url);
                if (!req.ok) {
                    throw new Error(`Error on check service ${url}`);
                }
                const log = new log_entities_1.LogEntities(`Service ${url} working`, log_entities_1.LogSeverityLevel.low);
                this.logRepository.saveLog(log);
                this.successCallback && this.successCallback();
                console.log(`${url} esta funcionando `);
            }
            catch (error) {
                const errorMessage = `${error}`;
                const log = new log_entities_1.LogEntities(errorMessage, log_entities_1.LogSeverityLevel.high);
                this.logRepository.saveLog(log);
                this.errorCallback && this.errorCallback(errorMessage);
                return false;
            }
            return true;
        });
    }
}
exports.CheckService = CheckService;
