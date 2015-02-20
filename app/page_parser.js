/**
 * @author //@by_rcmonitor@//
 * Date: 06.02.2015
 * Time: 23:59
 */

var lNamed = require('named-regexp').named;
	
var hpg = require('./common_helpers');

var regNameGroup = /[a-zA-Z\-\s]+/;
var regTagGroup = /(<[^>]+>)*/;

cPageParser = function(strPage) {

	var columns = {
		first: 5

	};

	var strCommonHeaderRegExp =
		  '<th><b>Software<\/b><\/th>\n?'
		+ '(<th>(<[^>]+>)*([a-zA-Z\\-\\s]+)(<[^>]+>)*?<\/th>\n?)'
		//+ '{'
		;
	var strCommonHeaderEndRegexp = 
		'}\n?<\/tr>';
	
	
	
	var rCHSoft = /<th><b>Software<\/b><\/th>\r?\n?/;
	//var firstPart = /<th><b>(:<soft>Software)<\/b>/;
	//var secondPart = /<\/th>/;
	//
	//var rCHSoft = /<th><b>Software<\/b><\/th>/;
	//var rCHSoft = new RegExp(firstPart.source + secondPart.source);
	var rCHRepeatableHeader = /(?:^<th>(?:<[^>]+>)*?(:<property>[a-zA-Z\-\s]+)(?:<[^>]+>)*?<\/th>\r?\n?)/;
	//var rCHRepeatableHeader = /<th>/;
	var rOpenQuantifier = /{/;
	var rCloseQuantifier = /}/;
	var rFirstCounter = /5/;
	
	//var rFirstBlockHeader = new RegExp(
	//	  strCommonHeaderRegExp
	//	//+ columns.first
	//	//+ strCommonHeaderEndRegexp
	//);
	
	this.page = strPage;
	
	this.parseHeader = function(){
		var regExpAssemble = new RegExp(
			//rCHSoft.source
			//+
			rCHRepeatableHeader.source
			//+ rOpenQuantifier.source
			//+ rFirstCounter.source
			//+ rCloseQuantifier.source
		, 'gm');
		
		//var rNamed = lNamed(regExpAssemble);
		
		var rNamed = lNamed(/(?:^<th>(?:<[^>]+>)*?(:<property>[a-zA-Z\-\s]+)(?:<[^>]+>)*?<\/th>\r?\n?)/gm);
		
		var arFirstTableHeaderMatches = rNamed.exec(strPage);
		
		//var arFirstTableHeaderMatches = rFirstBlockHeader.exec(strPage);

		//hpg.log(arFirstTableHeaderMatches, 'matches for first table`s header');
		
		return arFirstTableHeaderMatches;
	};
	
};



module.exports = cPageParser;


//var oLoader = require('./page_downloader_emitter');
//
//var strUrl = 'http://en.wikipedia.org/wiki/Comparison_of_project_management_software';
//
//oLoader.download(strUrl);
//
//oLoader.on('complete', function(result){
//	
//	
//});