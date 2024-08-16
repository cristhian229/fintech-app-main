import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/user';

interface InterestRateStrategy {
  calculate(user: User): number;
}

@Injectable()
export class StandardInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}

@Injectable()
export class PremiumInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 3 : 10;
  }
}

@Injectable()
export class CreditCalculationService {
  private strategy: InterestRateStrategy;

  constructor(strategy: InterestRateStrategy) {
    this.strategy = strategy;
  }

  calculateInterestRate(user: User): number {
    return this.strategy.calculate(user);
  }
}
