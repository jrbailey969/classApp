import { Injectable } from '@angular/core';

import { Artist } from './artist.model';
import { ARTISTS } from './artist.mock-data';

@Injectable()
export class ArtistService {
    private artists: Artist[];

    constructor() {
        this.artists = ARTISTS.slice(0);
    }
    getList(): Artist[] {
        return this.artists;
    }

    getById(id: string): Artist {
        return this.artists.find((a) => a.id === id);
    }

    add(artist: Artist): void {
        this.artists.push(artist);
    }

    update(artist: Artist): void {
        let existing = this.getById(artist.id);
        if (existing) {
            Object.assign(existing, artist);
        }
    }

    delete(artist: Artist): void {
        let index = this.artists.indexOf(artist);
        if (index >= 0) {
            this.artists.splice(index, 1);
        }
    }
}