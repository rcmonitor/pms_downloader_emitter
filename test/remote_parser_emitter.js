/**
 * @author //@by_rcmonitor@//
 * Date: 09.02.2015
 * Time: 13:12
 */

var should = require('chai').should();
var lFs = require('fs');
var lPath = require('path');

var hpg = require('../app/common_helpers');
var oParser = require('../app/remote_page_parser');


var strDirName = '../data';
var strFileName = 'wiki_pms_comparison.html';
strFileName = 'wpc_short.html';

var strPath = lPath.join(__dirname, strDirName, strFileName);
var strPage = lFs.readFileSync(strPath, {encoding: 'utf8'});

var oDate = new Date();


describe('remote_page_parser rabbitmq-driven remote php parser test:', function(){
	
	describe('#parse() deployment function test:', function(){
		//this.timeout(30000);
		
		it('should successfully deploy given message to rabbitmq', function(done){
			oParser.parse(strPage);
			
			oParser.on(oParser.validEvents.deployed, function(error){
				hpg.log(error, 'error in exchange.publish callback');
				if(error){
					done(new Error('some error when trying to publish'));
				}else{
					done();
				}
			})
		})
		
		
		
	})
	
});