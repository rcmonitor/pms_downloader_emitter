/**
 * @author //@by_rcmonitor@//
 * Date: 07.02.2015
 * Time: 13:54
 */

var lFs = require('fs');
var lPath = require('path');
var expect = require('chai').expect;
var should = require('chai').should();
var hpg = require('../app/common_helpers');

//var cParser = require('../app/page_parser');

var strDirName = '../data';
var strFileName = 'wiki_pms_comparison.html';
strFileName = 'wpc_short.html';

var strPath = lPath.join(__dirname, strDirName, strFileName);

var strPage = lFs.readFileSync(strPath, {encoding: 'utf8'});

describe('wiki page parser', function(){
	
	describe.skip('page should be read correctly', function(){
		strPage.should.not.be.empty();
	})
	
	describe.skip('page should be parsed correctly', function(){
		it('should parse some', function(){
			var oParser = new cParser(strPage);
			
			var arMatches = oParser.parseHeader();
			
			//hpg.log(arMatches[0], 'zero');
			//hpg.log(arMatches[1], 'one');
			//hpg.log(arMatches[2], 'two');
			//hpg.log(arMatches[3], 'three');
			//hpg.log(arMatches[4], 'four');
			//hpg.log(arMatches[5], 'five');
			
			hpg.log(arMatches, 'whole');
			hpg.log(arMatches.captures, 'captures');

			expect(arMatches).not.to.be.null;

			//arMatches.should.have.length(5);
		})
	})
});