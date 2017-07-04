import { Injectable } from '@angular/core';

import { Artist } from './artist.model';
import { ARTISTS } from './artist.mock-data';

@Injectable()
export class ArtistService {
    getList(): Artist[] {
        return ARTISTS;
    }

    getById(id: string): Artist {
        return ARTISTS.find((a) => a.id === id);
    }

    add(artist: Artist): void {
        ARTISTS.push(artist);
    }

    update(artist: Artist): void {
        let existing = this.getById(artist.id);
        if (existing) {
            Object.assign(existing, artist);
        }
    }

    delete(artist: Artist): void {
        let index = ARTISTS.indexOf(artist);
        if (index >= 0) {
            ARTISTS.splice(index, 1);
        }
    }
}