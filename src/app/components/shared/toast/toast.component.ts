import { Component, input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  result = input.required<boolean>();
  wait = input.required<boolean>();
}
