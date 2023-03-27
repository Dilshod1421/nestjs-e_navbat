import { Module } from '@nestjs/common';
import { SpecWorkingDayService } from './spec_working_day.service';
import { SpecWorkingDayController } from './spec_working_day.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecWorkingDay, SpecWorkingDaySchema } from './schemas/spec_working_day.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SpecWorkingDay.name, schema: SpecWorkingDaySchema }]),
  ],
  controllers: [SpecWorkingDayController],
  providers: [SpecWorkingDayService]
})
export class SpecWorkingDayModule { }
