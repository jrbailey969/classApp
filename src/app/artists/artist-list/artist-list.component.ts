import { Component, OnInit } from '@angular/core';

import { Artist } from './../shared/artist.model';
import { ArtistService } from './../shared/artist.service';

@Component({
    selector: 'artist-list',
    templateUrl: './artist-list.component.html'
})
export class ArtistListComponent implements OnInit {
    constructor(private artistService: ArtistService) {}
    ngOnInit() {
        this.artists = this.artistService.getList();
    }
    artists: Artist[];
}