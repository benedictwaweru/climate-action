import { Module } from '@nestjs/common';
import { MpesaModule } from './mpesa/mpesa.module';

@Module({
  imports: [MpesaModule],
})
export class PaymentsModule {}
