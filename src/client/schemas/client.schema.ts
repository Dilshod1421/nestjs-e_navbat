import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop()
    client_first_name: string;

    @Prop()
    client_last_name: string;

    @Prop({ required: true })
    client_phone_number: string;

    @Prop()
    client_info: string;

    @Prop()
    client_photo: string;

    @Prop({ default: true })
    client_is_active: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Otp' })
    otp_id: mongoose.Schema.Types.ObjectId;
}

export const ClientSchema = SchemaFactory.createForClass(Client);