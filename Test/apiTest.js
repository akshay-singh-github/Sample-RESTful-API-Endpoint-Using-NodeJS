const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
describe('GET /api/search/getSicknessLevel', function () {
    it('Response should have Correct Response Code i.e. 200 OK .', function (done) {
        chai.request("http://localhost:3000")
            .get('/api/search/getSicknessLevel')
            .query({latitude: '37.78239443', longitude: '-122.4099734', radius: '1000'})
            .end(function (error, response) {
                if (error) {
                    done(error);
                } else {
                    expect(response).to.have.status(200);
                    done();
                }


            });
    });

    it('Response body should have "sicknessLevel" field of valid type i.e. "number".', function (done) {
        chai.request("http://localhost:3000")
            .get('/api/search/getSicknessLevel')
            .query({latitude: '37.78239443', longitude: '-122.4099734', radius: '1000'})
            .end(function (error, response) {
                if (error) {
                    done(error);
                } else {
                    expect(response.body.sicknessLevel).to.exist;
                    expect(response.body.sicknessLevel).to.be.a('number');
                    done();
                }


            });
    });

    it('Response body should have "feverishData" field of valid type i.e. "array". It has all the records of people ' +
        '"with fever" with-in the given radius and location.', function (done) {
        chai.request("http://localhost:3000")
            .get('/api/search/getSicknessLevel')
            .query({latitude: '37.78239443', longitude: '-122.4099734', radius: '1000'})
            .end(function (error, response) {
                if (error) {
                    done(error);
                } else {
                    expect(response.body.feverishData).to.exist;
                    expect(response.body.feverishData).to.be.a('array');
                    done();
                }


            });
    });

    it('Response body should have "totalData" field of valid type i.e. "array". It has all the records of people ' +
        'with-in the given radius and location.', function (done) {
        chai.request("http://localhost:3000")
            .get('/api/search/getSicknessLevel')
            .query({latitude: '37.78239443', longitude: '-122.4099734', radius: '1000'})
            .end(function (error, response) {
                if (error) {
                    done(error);
                } else {
                    expect(response.body.totalData).to.exist;
                    expect(response.body.totalData).to.be.a('array');
                    done();
                }


            });
    });
});
