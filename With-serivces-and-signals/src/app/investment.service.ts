import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input-model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    resultData = signal<{
        year: number;
        interest: number;
        valueEndOfYear: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[] | undefined>(undefined);
      
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
        this.resultData.set(annualData);
        return annualData;
      }

}