import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-informative',
  templateUrl: './modal-informative.component.html',
  styleUrl: './modal-informative.component.css',
})
export class ModalInformativeComponent implements OnInit {
  url: string = '';
  response = input.required<number>();
  content = input.required<string>();
  //visible = input.required<boolean>();

  constructor() {}
  ngOnInit() {
    if (this.response() === 200) {
      console.log('es correcto');
      this.url = '../../../../assets/images/check.svg';
    } else {
      this.url = '../../../../assets/images/error.svg';
    }
  }
}
