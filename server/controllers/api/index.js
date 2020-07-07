const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/appointments', require('./appointmentController'));
apiControllers.use('/services', require('./servicesController'));

module.exports = apiControllers;
