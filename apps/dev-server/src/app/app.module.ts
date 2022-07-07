import { Module } from '@nestjs/common';

import { CenterMatrixModule } from '@tss/ctrm-backend';
import { CoreModule } from '../core/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
@Module({
  imports: [CoreModule, CenterMatrixModule, MorganModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('tiny'),
    },
  ],
})
export class AppModule {}
