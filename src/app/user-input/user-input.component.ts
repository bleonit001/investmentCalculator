import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  constructor(private investmentService: InvestmentService) {}

  get initialInvestment() {
    return this.enteredInitialInvestment();
  }

  set initialInvestment(value: number) {
    this.enteredInitialInvestment.set(value);
  }

  get annualInvestment() {
    return this.enteredAnnualInvestment();
  }

  set annualInvestment(value: number) {
    this.enteredAnnualInvestment.set(value);
  }

  get expectedReturn() {
    return this.enteredExpectedReturn();
  }

  set expectedReturn(value: number) {
    this.enteredExpectedReturn.set(value);
  }

  get duration() {
    return this.enteredDuration();
  }

  set duration(value: number) {
    this.enteredDuration.set(value);
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
      annualInvestment: this.annualInvestment,
    });

    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 5;
    this.duration = 10;
  }
}
