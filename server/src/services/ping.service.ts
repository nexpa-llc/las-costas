import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PingDocument } from 'src/schemas/ping.schema';

@Injectable()
export class PingService {
  constructor(@InjectModel('ping') private pingModel: Model<PingDocument>) {}

  findOne(): Promise<PingDocument> {
    return this.pingModel.findOne({}).exec();
  }
}
