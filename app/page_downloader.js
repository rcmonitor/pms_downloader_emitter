/**
 * @author //@by_rcmonitor@//
 * Date: 06.02.2015
 * Time: 18:13
 */
var http = require('http');
var url = require('url');

var headers = {
	  'User-Agent': 'Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17'
	, 'Content-Type': 'application/x-www-form-urlencoded'
};

//var options = {
//	host: 'en.wikipedia.org'
//	, port: 80
//	, path: '/wiki/Comparison_of_project_management_software'
//	, method: 'GET'
//	, headers: headers
//};

function cLoader(strUrl){
	var oUrl = url.parse(strUrl);
	
	this.host = oUrl.hostname;
	this.path = oUrl.pathname;
	
}

cLoader.prototype.download = function(callback){
	
	var options = {
		  host: this.host
		, path: this.path
		, port: 80
		, method: 'GET'
		, headers: headers
	}
	
	var request = http.request(options, function(response){
		var data = '';
		var chunksCount = 0;
		
		response.on('data', function(chunk){
			data += chunk;
			chunksCount ++;
			console.log('got chunk #' + chunksCount + ' ' + chunk.length + ' length');
		})
		
		response.on('end', function(){
			callback(data);
		})
		
	})
	
};

module.exports = cLoader;