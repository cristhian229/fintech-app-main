import { Injectable } from '@nestjs/common';
import { Microcredit } from 'src/interface/microcredit';
import { User } from 'src/interface/user';

@Injectable()
export class CreditCalculationService {
    calculateInterestRate(user: User): number {
        return user.creditScore > 700 ? 5 : 15
    }
}

@Injectable()
export class MicrocreditRegistryService {
    saveMicrocredit(microcredit: Microcredit): void{
      // Lógica para guardar el microcrédito en la base de datos
    }
}

@Injectable()
export class Microcreditservice {
    constructor(
        private readonly creditCalculationService: CreditCalculationService,
        private readonly microcreditRegistryService: MicrocreditRegistryService,
        private readonly userRepository: UserRepository
    ){}

    applyForMicrocredit(userId: string, amount: number): Microcredit {
        const user = this.userRepository.findById(userId);
        const interestRate =
          this.creditCalculationService.calculateInterestRate(user);
        const microcredit = new Microcredit(
          userId,
          amount,
          interestRate,
          'PENDING',
        );
        this.microcreditRegistryService.saveMicrocredit(microcredit);
        return microcredit;
    }
}