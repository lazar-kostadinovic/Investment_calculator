import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  standalone: true,
  imports:  [CurrencyPipe],
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
