import { Module } from '@nestjs/common';
import { MpesaService } from './mpesa.service';
import { MpesaController } from './mpesa.controller';

@Module({
  providers: [MpesaService],
  controllers: [MpesaController],
})
export class MpesaModule {}
