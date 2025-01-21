import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Ping {
  @Prop({ required: true })
  message: string;
}

export type PingDocument = HydratedDocument<Ping>;

export const PingSchema = SchemaFactory.createForClass(Ping);
