import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInformativeComponent } from './modal-informative/modal-informative.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ModalInformativeComponent],
  imports: [CommonModule, BrowserModule, MatDialogModule],
})
export class SharedModule {}
