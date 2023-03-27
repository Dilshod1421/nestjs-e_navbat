import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type SpecWorkingDayDocument = HydratedDocument<SpecWorkingDay>;

@Schema()
export class SpecWorkingDay {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Specialist' })
    spec_id: mongoose.Schema.Types.ObjectId;

    @Prop()
    day_of_week: string;

    @Prop()
    start_time: string;

    @Prop()
    finish_time: string;

    @Prop()
    rest_start_time: string;

    @Prop()
    rest_finish_time: string;
}

export const SpecWorkingDaySchema = SchemaFactory.createForClass(SpecWorkingDay);