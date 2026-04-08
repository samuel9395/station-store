import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from './components/menu-bar/menu-bar';
import { Home } from './pages/home/home';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar,Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('5500ms', style({ opacity: 3 }))]),
    ]),
  ],
})
export class App {
  protected readonly title = signal('station-store');
}
