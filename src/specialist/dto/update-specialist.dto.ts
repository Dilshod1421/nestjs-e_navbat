import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialistDto } from './create-specialist.dto';

export class UpdateSpecialistDto {
    position?: string;
    last_name?: string;
    first_name?: string;
    middle_name?: string;
    birthday?: string;
    photo?: string;
    phone?: string;
    info?: string;
    otp_id?: string;
}
