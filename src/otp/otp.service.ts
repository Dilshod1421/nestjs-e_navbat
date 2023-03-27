import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import * as otpGenerator from 'otp-generator';
import { PhoneDto } from './dto/phone.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Otp, OtpDocument } from './schemas/otp.schema';
import { Model } from 'mongoose';
import { AddMinutesToDate, dates, decode, encode } from 'src/helpers/crypto';

@Injectable()
export class OtpService {
  constructor(
    @InjectModel(Otp.name) private otpModel: Model<OtpDocument>) { };

  async newOtp(phoneDto: PhoneDto) {
    const phone_number = phoneDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false
    });
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    const new_otp = await this.otpModel.create({ otp, expiration_time, check: phone_number });
    const details = {
      timestamp: now, check: phone_number, success: true, message: "OTP send to user", otp_id: new_otp.id
    };
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded };
  }


  // async verifyOtp(verifyOtpDto: VerifyOtpDto) {
  //   const { verification_key, otp, check } = verifyOtpDto;
  //   const currentdate = new Date();
  //   const decoded = await decode(verification_key);
  //   const obj = JSON.parse(decoded);
  //   const check_obj = obj.check;
  //   if (check_obj != check)
  //     throw new BadRequestException('OTP bu raqamga yuborilmagan');
  //   const result = await this.otpModel.findOne({ where: { id: obj.otp_id } });
  //   if (result != null) {
  //     if (!result.verified) {
  //       if (dates.compare(result.expiration_time, currentdate)) {
  //         if (otp === result.otp) {
  //           const user = await this.userRepo.findOne({
  //             where: { phone: check },
  //           });
  //           console.log(user);
  //           if (user) {
  //             const updatedUser = await this.userRepo.update(
  //               { is_owner: true },
  //               { where: { id: user.id }, returning: true },
  //             );
  //             await this.otpModel.updateOne(
  //               { verified: true }, { where: { id: obj.otp_id }, returning: true }
  //             )
  //             const response = {
  //               message: 'User updated as owner',
  //               user: updatedUser[1][0],
  //             };
  //             return response;
  //           }
  //         } else {
  //           throw new BadRequestException('Otp is not match');
  //         }
  //       } else {
  //         throw new BadRequestException('Otp expired');
  //       }
  //     } else {
  //       throw new BadRequestException('Otp already used');
  //     }
  //   } else {
  //     throw new BadRequestException('User not found');
  //   }
  // }


  create(createOtpDto: CreateOtpDto) {
    return 'This action adds a new otp';
  }

  findAll() {
    return `This action returns all otp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otp`;
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return `This action updates a #${id} otp`;
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
