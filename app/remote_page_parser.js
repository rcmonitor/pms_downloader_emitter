/**
 * @author //@by_rcmonitor@//
 * Date: 09.02.2015
 * Time: 12:01
 */


var amqp = require('amqp');
var cEventEmitter = require('events').EventEmitter;

var amqpHacks = require('./amqp_hacks.js');
var hpg = require('./common_helpers.js');


var oParser = new cEventEmitter();
//var oDate = new Date();

oParser.validEvents = {
	"deployed": "deployed"
};

var oExchangeParameters = {
	"type": "topic"
	, "autoDelete": false
	, "durable": true
	, "confirm": true
};

var timeStarted = new Date().getTime();

var strHost = 'localhost';
//strHost = 'centos7.test';

oParser.parse = function(strPage){
	
	//var timeStarted = oDate.getTime();

	hpg.log(hpg.time(timeStarted), 'parser start time');

	var rmConnection = amqp.createConnection({host: strHost});
	
	rmConnection.on('ready', function(){
		hpg.log(hpg.time(new Date().getTime() - timeStarted), 'connection ready in');
		//hpg.log(result);
		rmConnection.exchange('parser_exchange', oExchangeParameters
			, function(rmExchange){

				hpg.log(hpg.time(new Date().getTime() - timeStarted),
					'exchange initiated in');
				
				rmExchange.publish('parser.in', strPage, {
					"contentEncoding": "utf8"
				}, function(result){
					hpg.log(hpg.time(new Date().getTime() - timeStarted),
						'message successfully published to parser in');
					//hpg.log('');
					amqpHacks.safeEndConnection(rmConnection);
					
					oParser.emit(oParser.validEvents.deployed, result);
					
				});
				
				hpg.log('message publishing initiated');
				
			});
		
	});
};

module.exports = oParser;