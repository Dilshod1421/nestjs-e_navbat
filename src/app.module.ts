import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { TokenModule } from './token/token.module';
import { SpecialistModule } from './specialist/specialist.module';
import { ClientModule } from './client/client.module';
import { OtpModule } from './otp/otp.module';
import { QueueModule } from './queue/queue.module';
import { ServiceModule } from './service/service.module';
import { SpecServiceModule } from './spec_service/spec_service.module';
import { SpecWorkingDayModule } from './spec_working_day/spec_working_day.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    TokenModule,
    SpecialistModule,
    ClientModule,
    OtpModule,
    QueueModule,
    ServiceModule,
    SpecServiceModule,
    SpecWorkingDayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
