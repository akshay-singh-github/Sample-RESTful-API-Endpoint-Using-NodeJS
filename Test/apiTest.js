const chai = require('chai');
const expect = require('chai').expect;
const mocha = require('mocha');
var assert = require('assert');

chai.use(require('chai-http'));
describe('GET /api/search/getSicknessLevel', function () {
    it('It should get all the data needed.', function (done) {
        chai.request("http://localhost:3000")
            .get('/api/search/getSicknessLevel')
            .query({latitude:'37.78239443',longitude:'-122.4099734',radius:'1000'})
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();                               // <= Call done to signal callback end
            });
    });
});
