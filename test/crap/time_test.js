/**
 * @author //@by_rcmonitor@//
 * Date: 09.02.2015
 * Time: 14:21
 */
var hpg = require('../../app/common_helpers');

//var oDate = new Date();
var timeStart = new Date().getTime();
hpg.log(hpg.time(timeStart), 'start time');
hpg.log(hpg.time(timeStart - 1423481823446), 'time diff');

setTimeout(function(){
	
	//var oLDate = new Date();
	var currentTime = new Date().getTime();
	
	hpg.log(hpg.time(currentTime - timeStart), 'time elapsed');
	//hpg.log(oDate.getTime() - timeStart, 'timestamp for elapsed');
	//hpg.log(oDate.getTime(), 'timestamp for current');
	//hpg.log(timeStart, 'timestamp for start');
	//hpg.log(oLDate.getTime(), 'timestamp for now');
}, 2000);

//hpg.log(hpg.time(oDate.getTime() - timeStart), 'time elapsed');
