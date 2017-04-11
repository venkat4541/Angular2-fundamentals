import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <ul>
    <li *ngFor="let message of mail.message">
      {{ message }}
    </li>
  </ul>
  </div>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lets get started!';

  constructor(
    @Inject('mail') private mail,
  ) {

  }
}
