import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input-model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');

  constructor(private investmentService: InvestmentService){}
//kada dodamo private/public novi propery clase UserInputComponent ce biti napravljen
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      iniInv: +this.initialInvestment(),
      annInv: +this.annualInvestment(),
      expRet: +this.expectedReturn(),
      dur: +this.duration(),
    
    });
    this.initialInvestment.set('0'),
    this.annualInvestment.set('0'),
    this.expectedReturn.set('0'),
    this.duration.set('0') 
  }
} 
