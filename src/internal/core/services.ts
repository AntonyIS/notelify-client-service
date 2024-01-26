import { LogMessage } from "./domain";

class LogMessageService  {
    logURL:string;
    Service : string
    constructor(logURL:string){
        this.logURL = logURL
        this.Service = "Client"    
    }

    SendLog(LogPayload: LogMessage): void {
        const dateString = "2024/01/25 21:34:36";
        const dateTime = new Date(dateString);
        // const logEntry = `[${this.Service}] [Client] ${dateTime} ${LogPayload.Message}`
        LogPayload.Message = `[${this.Service}] [${dateTime}] ${LogPayload.Message}`
        try {
            const response =  fetch(this.logURL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(LogPayload),
            });
            console.log(response)
        }catch (error) {
            throw new Error (`ERROR : ${error}`)
        }
    }

    LogInfo(LogPayload: LogMessage): void{
        let message: LogMessage = {
            LogLevel : "INFO",
            Message : LogPayload.Message,
            Service : "Client",
        }

        this.SendLog(message)
    }

    LogDebug(LogPayload: LogMessage): void{
        let message: LogMessage = {
            LogLevel : "DEBUG",
            Message : LogPayload.Message,
            Service : "Client",
        }

        this.SendLog(message)
    }

    LogWarning(LogPayload: LogMessage): void{
        let message: LogMessage = {
            LogLevel : "WARNING",
            Message : LogPayload.Message,
            Service : "Client",
        }
        this.SendLog(message)
    }

    LogError(LogPayload: LogMessage): void{
        let message: LogMessage = {
            LogLevel : "ERROR",
            Message : LogPayload.Message,
            Service : "Client",
        }

        this.SendLog(message)
    }
}


export default LogMessageService;