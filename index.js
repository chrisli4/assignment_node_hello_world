var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');
var data = require('./data/logs');

logger.log('this is info', 'ERROR');
console.log(data);

_.each(data, function(item) {
	logger.log(item.message, item.level);
})