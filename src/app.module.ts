import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareModule } from './common/middleware/middleware.module';
import { CreditCalculationService } from './credit/credit.service';

@Module({
  imports: [MiddlewareModule],
  controllers: [AppController],
  providers: [AppService, CreditCalculationService],
})
export class AppModule {}
