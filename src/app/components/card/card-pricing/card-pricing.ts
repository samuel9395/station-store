import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css',
})
export class CardPricing implements OnInit {

  @Input()
  priceTitle: string = ''
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';

  constructor() {}

  ngOnInit(): void {
    //
  }
}
