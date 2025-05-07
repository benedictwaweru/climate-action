import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordModule } from './password/password.module';
import { TotpModule } from './totp/totp.module';
import { MfaModule } from './mfa/mfa.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [PasswordModule, TotpModule, MfaModule],
})
export class AuthModule {}
