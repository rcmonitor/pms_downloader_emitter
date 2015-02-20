/**
 * @author //@by_rcmonitor@//
 * Date: 06.02.2015
 * Time: 22:51
 */

var http = require('http');
var url = require('url');
var cEventEmitter = require('events').EventEmitter;
var fs = require('fs');
var lPath = require('path');
var hpg = require('../app/common_helpers');

var headers = {
	'User-Agent': 'Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17'
	, 'Content-Type': 'application/x-www-form-urlencoded'
};
var filename = 'wiki_pms_comparison.html';

var oLoader = new cEventEmitter();

oLoader.validEvents = {
	complete: 'complete'
};

oLoader.download = function(strUrl){

	var request = http.request(strUrl, function(response){
		var data = '';
		var chunksCount = 0;
		var result = {
			  status: response.statusCode
			, headers: response.headers
		};
		
		response.setEncoding('utf8');
		
		response.on('data', function(chunk){
			data += chunk;
			chunksCount ++;
		});

		response.on('end', function(){
			result.data = data;
			result.filename = filename;

			var strPath = lPath.join(__dirname, '../data/' + filename);
			
			fs.unlink(strPath, function(error){
				if(error) {
					if(error.code == 'ENOENT'){
						fs.writeFile(strPath, data, function(error){
							if(error) throw error;
							oLoader.emit(oLoader.validEvents.complete, result);
						});
					}else{
						throw error;
					}
				}else{
					fs.writeFile(strPath, data, function(error){
						if(error) throw error;
						oLoader.emit(oLoader.validEvents.complete, result);
					});
				}
			});
		});

	});
	
	request.end();
	
};


module.exports = oLoader;