'use strict';
import fs from 'fs';
import pino from 'pino';
const DEBUGFUNCS = ['fatal', 'error', 'warn', 'info', 'debug'];

/**
 * 
 * @param {*} debugFunc Function used to print the debug messge
 * @param {*} enableDetails Whether to print function and line number
 * @param {*} msg Debug message
 * @param {*} level Default 2 for parent func, change to 3 for grandparent func
 * @returns 
 */
function debugLog(debugFunc, enableDetails, msg, level=2) {
    if(!enableDetails) {
        debugFunc(msg);
        return;
    }

    let e = new Error();
    let frame = e.stack.split("\n")[level];
    let lineNumber = frame?.split(":").reverse()[1];
    let functionName = frame?.split(" ")[5];
    debugFunc(`[${functionName}:${lineNumber}]: %o`, msg);
}

class Logger {
    constructor(level, enableDetails) {
        this.setLevel(level, enableDetails)
    }

    setLevel(level, enableDetails) {
        let LOGGER =  pino({
            level: level
        }, process.stdout);

        if('debug' === process.env.LEVEL) {
            let streams = [];
            for (let func of DEBUGFUNCS) {
                streams.push({level: func, stream: fs.createWriteStream(`./debug-log.stream.out`)});
                if(func === level) {
                    break;
                }
            }
            
            LOGGER = pino(pino.multistream(streams));
            LOGGER.level = level;
        }
        
        for (let func of DEBUGFUNCS) {
            this[func] = debugLog.bind(null, LOGGER[func].bind(LOGGER), enableDetails);
        }
    }
}

const logger = new Logger(process.env.LEVEL || 'info', true);

export default logger;
