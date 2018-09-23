import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova-trinity';
  textImg;

  @ViewChild('windowModal') modal: ElementRef;
  @ViewChild('close') btClose: ElementRef;
  @ViewChild('imgModal') modalImg: ElementRef;

  @ViewChild('img1') img1: ElementRef;
  @ViewChild('img2') img2: ElementRef;
  @ViewChild('img3') img3: ElementRef;
  @ViewChild('img4') img4: ElementRef;


  constructor(
    private _renderer: Renderer,
  ) { }

  openModal(img) {
    var thisImg;

    if (img === 1) {
      thisImg = this.img1;
    } else if (img === 2) {
      thisImg = this.img2;
    } else if (img === 3) {
      thisImg = this.img3;
    } else if (img === 4) {
      thisImg = this.img4;
    } else {
      alert('Erro inesperado, atualize a pagina!');
    }

    this._renderer.setElementStyle(
      this.modal.nativeElement,
      'display',
      'block'
    );

    this._renderer.setElementAttribute(
      this.modalImg.nativeElement,
      'src',
      thisImg.nativeElement.src
    );

    this.textImg = thisImg.nativeElement.alt;

    this._renderer.setElementAttribute(
      this.modalImg.nativeElement,
      'alt',
      this.textImg
    );
  }

  closeModal() {
    this._renderer.setElementStyle(
      this.modal.nativeElement,
      'display',
      'none'
    );
  }
}