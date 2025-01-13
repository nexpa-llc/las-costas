import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PingController {
  @Get()
  async ping() {
    return {
      message: 'Pong',
      success: true,
      statusCode: 200,
    };
  }
}
