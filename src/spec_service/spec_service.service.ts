import { Injectable } from '@nestjs/common';
import { CreateSpecServiceDto } from './dto/create-spec_service.dto';
import { UpdateSpecServiceDto } from './dto/update-spec_service.dto';

@Injectable()
export class SpecServiceService {
  create(createSpecServiceDto: CreateSpecServiceDto) {
    return 'This action adds a new specService';
  }

  findAll() {
    return `This action returns all specService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specService`;
  }

  update(id: number, updateSpecServiceDto: UpdateSpecServiceDto) {
    return `This action updates a #${id} specService`;
  }

  remove(id: number) {
    return `This action removes a #${id} specService`;
  }
}
