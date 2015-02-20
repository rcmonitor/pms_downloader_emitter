/**
 * @author //@by_rcmonitor@//
 * Date: 05.02.2015
 * Time: 23:00
 */

var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var should = require('chai').should();

var mongoPath = 'mongodb://localhost:27017/test_db';
var collectionName = 'test_collection';
	
var data = require('./data_test');

var connection = undefined;
var database = undefined;
describe('mongodb data manipulation', function(){
	
	beforeEach('connecting to database, dropping ' + collectionName + ' collection', 
		function(done){
		connection = mongoClient.connect(mongoPath, function(error, db){
			if(error) done(error);
			database = db;
			var collection = db.collection(collectionName);
			if(typeof collection.count != 'undefined'){
				collection.deleteMany({}, {}, function(error, result){
					
					done(error);
				});
			}else{

				done(error);
			}
		});
		
	});
	
	afterEach('closing database connection', function(done){
		database.close();
		connection = undefined;
		done();
		
	});
	
	describe('#insert()', function(){
		it('should insert 3 documents into database', function(done){
			var collection = database.collection(collectionName);
			collection.insert(data.insertDataSet, function(error, result){
				
				if(error) done(error);

				result.should.not.be.an('undefined');
				result.result.ok.should.be.ok();
				result.result.n.should.equal(3);
				
				result.ops.length.should.be.equal(3);
				result.ops[0].should.have.keys(['first', 'second', 'third', '_id']);

				done(error);
				
			});
		});
		
		it('database should contain 3 documents', function (done){
			
			var collection = database.collection(collectionName);

			collection.should.not.be.equal(null);
			
			collection.count({}, function(error, result){
				
				result.should.equal(0);
				done(error);
			});
		});
	});
	
});