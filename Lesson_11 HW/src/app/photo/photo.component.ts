import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input()
  singlePhoto;

  constructor() { }

  ngOnInit() {
    // console.log(this.singlePhoto);
  }

  showLargeImg(e, event) {
    // console.log(e, event);

    var large = document.createElement("div");
    large.classList.add('largeImg');

    var close = document.createElement("div");
    close.classList.add('largeImgClose');
    close.innerText = 'close';
    close.onclick  = function() {
      large.remove();
    }
    large.appendChild(close);

    var img = document.createElement("img");
    img.src = e.url;

    large.appendChild(img); 

    var parent = event.target.parentNode;

    


    parent.appendChild(large); 
  }

}
