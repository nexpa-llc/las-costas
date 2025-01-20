import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { PublicException } from 'src/errors/public-exception';
import { SmartResponse } from 'src/types/smart-response';

interface ClientData {
  timestamp: string;
  stack?: string;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const timestamp = new Date().toISOString();

    const clientResponse: SmartResponse<ClientData> = {
      message: 'Oops! An error occurred.',
      statusCode: status,
      success: false,
      data: {
        timestamp,
      },
    };

    if (exception instanceof PublicException) {
      clientResponse.message = exception.message;
    }

    if (process.env.NODE_ENV === 'development') {
      clientResponse.message = exception.message;

      if (exception.stack) {
        clientResponse.data.stack = exception.stack;
      }
    }

    response.status(status).json(clientResponse);
  }
}
