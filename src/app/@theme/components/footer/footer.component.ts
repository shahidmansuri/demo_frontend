import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.peerbits.com/" target="_blank">Peerbits</a></b>
    </span>
    <div class="socials">
      <a href="https://github.com/Peerbits" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/Peerbits/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/Peerbits" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/peerbits" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
