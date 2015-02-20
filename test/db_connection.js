/**
 * @author //@by_rcmonitor@//
 * Date: 05.02.2015
 * Time: 11:06
 */

var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var should = require('chai').should();

var mongoPath = 'mongodb://localhost:27017/test_db';
var collectionName = 'test_collection';

describe('mongodb_connection', function(){

//	afterEach(function(doneAfter){
//		mongoClient.connect(mongoPath, function(error, db){
//
////	exiting here
//			if (error) doneAfter(error);
//
//			var collection = db.collection(collectionName);
//
//			if(typeof (collection.count()) != 'undefined'){
//
//				console.log('collection ' + collectionName);
//				console.log(collection.count());
//
//				collection.drop(function(error, collection){
//					console.log('cleaning up ' + collectionName);
//					db.close();
//					doneAfter(error);
//				});
//			}else{
//				console.log('db is: ');
//				console.log(db);
//				db.close();
//				doneAfter();
//			}
//
//			//done(error);
//		});
//	});

	describe('#connect()', function(){
		it('should have error null on success', function(doneConnect){
			mongoClient.connect(mongoPath, function(error, db){
				console.log('correctly connected to server with database test_db');
				db.close();
				doneConnect(error);
			});
		});
	});

	//describe('#insert()', function(){
	//	it('should insert 3 data-sets', function(doneInsert){
	//		mongoClient.connect(mongoPath, function(error, db){
	//
	//			if(error) doneInsert(error);
	//
	//			var collection = db.collection(collectionName);
	//
	//			//dataSet.map(function(item){
	//			//	collection.insert(item, function(error, result){
	//			//		if(error) done(error);
	//			//	});
	//			//});
	//
	//
	//			collection.insert(dataSet, function(error, result){
	//				if(error) doneInsert(error);
	//				var count = collection.count();
	//
	//				count.should.equal(dataSet.length);
	//
	//				db.close();
	//			});
	//
	//			//done(error);
	//		});
	//	});
	//});


});


