import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
