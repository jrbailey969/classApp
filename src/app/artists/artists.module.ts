import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistService } from './shared/artist.service';

@NgModule({
    imports: [CommonModule],
    exports: [ArtistListComponent],
    declarations: [ArtistListComponent],
    providers: [ArtistService]
})
export class ArtistsModule {}