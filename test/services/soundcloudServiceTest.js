var expect = require('chai').expect;
var sinon = require('sinon');
var service = require('../../src/services/soundcloudService');
var nock = require('nock');
var config = require('../../config/config');


describe('Soundcloud service test', function() {
    
    it('gets playlists', function(done) {

        nock('https://api.soundcloud.com')
        .get('/playlists/85980757?client_id=' + config.key)
        .reply(200, {
            tracks: [
                {
                    "kind": "track",
                    "id": 196010172,
                    "title": "Test Track",
                }
            ]
        });
        
        service.getPlaylist(function (err, res) {
            expect(res).to.be.an('array');
            expect(res[0]).to.be.an('object');
            done();
        });

    });
});