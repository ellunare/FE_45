import {
  Component,
  OnInit,
  OnChanges,
  Input
} from '@angular/core';

import { PhotoComponent } from '../photo/photo.component';

import { PhotosService } from '../-services/photos.service';

@Component({
  selector: 'photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [PhotosService]
})
export class PhotosListComponent implements OnInit, OnChanges {

  @Input() id;

  photosList;

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.photosService.getPhotos(this.id)
      .subscribe(
      res => {
        this.photosList = res;
      }
      )
  }

  ngOnChanges(changes) {
    if (changes.id) {
      this.getList();
    }
  }

}

