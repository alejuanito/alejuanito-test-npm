const  logger  = require('./logger.service')
function testMethod(data) {

    console.log('Se esta probando la libreria de npm');
    logger.info(data.message, {
        summary: {
          event: data,
          service: data.service,
          eventId: data.eventId
        },
      });
}

module.exports = testMethod