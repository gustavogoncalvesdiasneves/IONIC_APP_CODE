import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Butoes', url: 'botoes', icon: 'cube' },
    { title: 'Cards', url: 'card', icon: 'cube' },
    { title: 'Alert', url: 'alert', icon: 'cube' },
    { title: 'Accordion', url: 'accordion', icon: 'cube' },
    { title: 'Action-Sheet', url: 'action-sheet', icon: 'cube' }
  ];
  
}
