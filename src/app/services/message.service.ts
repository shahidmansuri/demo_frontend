import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public toastrService: NbToastrService) { }

  success(message:string, title:string = 'Success'):void {
    this.toastrService.show(message, title, { status: 'success' });
  }

  error(message:string, title:string = 'Error'):void {
    this.toastrService.show(message, title, { status: 'danger' });
  }

  warning(message:string, title:string = 'Warning'):void {
    this.toastrService.show(message, title, { status: 'warning' });
  }

}
