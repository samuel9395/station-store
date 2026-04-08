import { Component, Input, OnInit } from '@angular/core';
import { CardLabel } from './card-label/card-label';
import { CardPricing } from './card-pricing/card-pricing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabel, CardPricing, TranslateModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  priceTitle: string = '';
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';

  ngOnInit(): void {
    // Component initialization logic here if needed
  }
}
