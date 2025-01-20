import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PingController {
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
}
