const EventEmitter = require('events')

class Logger extends EventEmitter {
  log(message){
    this.emit('message', `${message} created: ${Date()}`)
  }
}

const logger = new Logger();
logger.on('message', data => {
  console.log(data)
})
logger.log("Say")