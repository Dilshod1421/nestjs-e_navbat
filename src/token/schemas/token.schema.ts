import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type TokenDocument = HydratedDocument<Token>;

@Schema()
export class Token {
    @Prop()
    table_name: string;

    @Prop([
        { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
        { type: mongoose.Schema.Types.ObjectId, ref: 'Specialist' },
        { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
    ])
    user_id: mongoose.Schema.Types.ObjectId;

    @Prop()
    user_os: string;

    @Prop()
    user_device: string;

    @Prop()
    hashed_refresh_token: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
