import { Injectable } from '@nestjs/common';
import { CreateSpecWorkingDayDto } from './dto/create-spec_working_day.dto';
import { UpdateSpecWorkingDayDto } from './dto/update-spec_working_day.dto';

@Injectable()
export class SpecWorkingDayService {
  create(createSpecWorkingDayDto: CreateSpecWorkingDayDto) {
    return 'This action adds a new specWorkingDay';
  }

  findAll() {
    return `This action returns all specWorkingDay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specWorkingDay`;
  }

  update(id: number, updateSpecWorkingDayDto: UpdateSpecWorkingDayDto) {
    return `This action updates a #${id} specWorkingDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} specWorkingDay`;
  }
}
