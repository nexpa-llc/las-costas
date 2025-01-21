import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './controllers/ping.controller';
import { PingService } from './services/ping.service';
import { PingSchema } from './schemas/ping.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: 'ping', schema: PingSchema }]),
  ],
  controllers: [PingController],
  providers: [PingService],
})
export class AppModule {}
