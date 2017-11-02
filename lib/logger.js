var chalk = require('chalk');

var logger = {
	log: function(message, logLevel) {
		switch(logLevel) {
			case 'info':
				logger.info(message);
				break;
			case 'warning':
				logger.warning(message);
				break;
			case 'error':
				logger.error(message);
				break;
			default:
				console.log('logging level not found');
		}
	},
	info: function(message) {
		console.log(chalk.blue(message));
	},
	warning: function(message) {
		console.log(chalk.yellow(message));
	},
	error: function(message) {
		console.log(chalk.red(message));
	}
}

module.exports = logger;