import { Component, Input, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from './investment-input-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  resultData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  // @Input({ required: true }) mara!: InvestmentInput;

  // novaFunkcija(stanko: InvestmentInput) {
  //   this.mara = stanko;
  //   console.log(stanko);
  // }

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    let investmentValue = data.iniInv;

    for (let i = 0; i < data.dur; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expRet / 100);
      investmentValue += interestEarnedInYear + data.annInv;
      const totalInterest = investmentValue - data.annInv * year - data.iniInv;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annInv,
        totalInterest: totalInterest,
        totalAmountInvested: data.iniInv + data.annInv * year,
      });
    }
    this.resultData=annualData;
    return annualData;
  }
}
