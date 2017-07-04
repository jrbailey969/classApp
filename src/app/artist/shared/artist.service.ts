import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Artist } from './artist.model';
import { ARTISTS } from './artist.mock-data';

@Injectable()
export class ArtistService {
    getList(): Artist[] {
        return ARTISTS;
    }
}