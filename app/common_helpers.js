/**
 * @author //@by_rcmonitor@//
 * Date: 07.02.2015
 * Time: 10:20
 */

var util = require('util');

//var helper = function(){

var log = function(variable, description){
		
	description = typeof description !== 'undefined' ? description : 'given variable is';

	var options = {
		  showHidden: false
		, depth: 2
		, colors: true
		, customInspect: true
	};

	console.log(description + ':');
	console.log(util.inspect(variable, options));
};

var time = function(intTime){
	var second = 1000;
	
	var strSeconds = Math.floor(intTime / second).toString();
	var strMilliseconds = (intTime % second).toString();
	
	var strTime = strSeconds + '.' + strMilliseconds;
	
	return strTime;
};
	
//};

exports.log = log;
exports.time = time;