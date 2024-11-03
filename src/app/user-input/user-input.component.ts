import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter <InvestmentInput>();
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  onSubmit() {
    this.calculate.emit({
      iniInv: +this.initialInvestment,
      annInv: +this.annualInvestment,
      expRet: +this.expectedReturn,
      dur: +this.duration
    });
  }
} 
