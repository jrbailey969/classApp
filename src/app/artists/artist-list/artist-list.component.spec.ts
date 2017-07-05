import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';
import { ArtistService } from './../shared/artist.service';
import { Artist } from './../shared/artist.model';

@Component({
    selector: 'test',
    template: `<artist-list></artist-list>`
})
class TestComponent {
}

class MockArtistService {
    getList(): Artist[] {
        return [
            {
                id: '1',
                name: 'The Beatles'
            },
            {
                id: '2',
                name: 'The Who'
            }
        ];
    }
}

describe('ArtistListComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, ArtistListComponent],
            providers: [{ provide: ArtistService, useClass: MockArtistService }]
        });
    });

    beforeEach(() => {
        TestBed.compileComponents();
    });

    it('displays list', async(() => {
        const fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();
        const el = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelector('ul li:first-child').textContent).toContain('1 The Beatles');
        expect(el.querySelectorAll('ul li').length).toEqual(2);
    }));
});