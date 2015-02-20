/**
 * @author //@by_rcmonitor@//
 * Date: 06.02.2015
 * Time: 19:08
 */
var Loader = require('../app/page_downloader');
require('chai').should();

var strUrl = 'http://en.wikipedia.org/wiki/Comparison_of_project_management_software';

var oLoader = new Loader(strUrl);

describe('page loader behavior', function(){
	
	describe.skip('constructor should correctly parse url given', function(){
		it('host should be an english wikipedia', function(){
			oLoader.host.should.equal('en.wikipedia.org');
			
		})
		
		it('path should be a comparison of pms', function(){
			oLoader.path.should.equal('/wiki/Comparison_of_project_management_software');
			
		})
	})
});