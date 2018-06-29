import { expect } from 'chai';
import nock from 'nock';
import config from '../../config/config';
import service from '../../src/services/soundcloudService';

describe('Soundcloud service test', () => {
    it('gets playlists', done => {
        nock('https://api.soundcloud.com')
            .get(`/playlists/85980757?client_id=${config.key}`)
            .reply(200, {
                tracks: [
                    {
                        kind: 'track',
                        id: 196010172,
                        title: 'Test Track'
                    }
                ]
            });

        service.getPlaylist((err, res) => {
            expect(res).to.be.an('array');
            expect(res[0]).to.be.an('object');
            done();
        });
    });
});
