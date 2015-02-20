/**
 * @author //@by_rcmonitor@//
 * Date: 06.02.2015
 * Time: 23:15
 */

require('chai').should();
var http = require('http');
var fs = require('fs');
var lPath = require('path');
var hpg = require('../app/common_helpers.js');

var oLoader = require('../app/page_downloader_emitter');

var strUrl = 'http://en.wikipedia.org/wiki/Comparison_of_project_management_software';

describe('downloader tests', function(){
	
	describe.skip('#download function', function(){
		this.timeout(4000);
		it('should successfully download given page', function(done){

			oLoader.download(strUrl);

			oLoader.on('complete', function(result){
				
				result.status.should.equal(200);
				result.filename.should.equal('wiki_pms_comparison.html');
				var strPath = lPath.join(__dirname, '../data', result.filename);

				fs.exists(strPath, function(exists){
					
					exists.should.be.true();
					
					done();
				});
				
			});
		})
		
	})
	
});
