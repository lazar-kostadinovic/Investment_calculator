import { Component, computed, inject} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  standalone: true,
  imports: [CurrencyPipe],
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  // get results() {
  //   return this.investmentService.resultData;
  // }
  results = computed ( () =>this.investmentService.resultData());
  // results = this.investmentService.resultData.asReadonly(); ovo je drugi nacin da se napise isto
}
 