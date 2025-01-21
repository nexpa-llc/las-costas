import { Controller, Get } from '@nestjs/common';
import { PingService } from 'src/services/ping.service';

@Controller('ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  ping() {
    return {
      statusCode: 200,
      success: true,
      message: 'Pong',
      data: {
        version: process.env.npm_package_version,
      },
    };
  }

  @Get('db')
  async pingDb() {
    const pingDoc = await this.pingService.findOne();

    return {
      statusCode: 200,
      success: true,
      message: pingDoc.message,
      data: {
        version: process.env.npm_package_version,
      },
    };
  }
}
