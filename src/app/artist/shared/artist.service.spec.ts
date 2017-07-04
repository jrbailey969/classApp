import { ArtistService } from './artist.service';

describe('ArtistService', () => {
    let artistService: ArtistService;

    beforeEach(() => {
        artistService = new ArtistService();
    });

    it('#getList should get all artists', () => {
        let artists = artistService.getList();

        expect(artists).toBeDefined();
        expect(artists.length).toEqual(3);
        expect(artists[0].id).toEqual('1');
        expect(artists[0].name).toEqual('Amy Winehouse');
    });

    it('#getById should return specific artist', () => {
        let artist = artistService.getById('2');

        expect(artist).toBeDefined();
        expect(artist.id).toEqual('2');
        expect(artist.name).toEqual('Beastie Boys');
    });
});