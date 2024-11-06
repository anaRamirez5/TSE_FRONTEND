import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-informative',
  templateUrl: './modal-informative.component.html',
  styleUrl: './modal-informative.component.css',
})
export class ModalInformativeComponent implements OnInit {
  url: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { response: number; content: string },
    public readonly dialogRef: MatDialogRef<ModalInformativeComponent>
  ) {
    if (data.response === 200) {
      this.url = '../../../../assets/images/check.svg';
    } else {
      this.url = '../../../../assets/images/error.svg';
    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 4000);
  }
}
