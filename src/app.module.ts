import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './modules/orm/orm.module';
import { MailModule } from './modules/mail/mail.module';

@Module({
  imports: [OrmModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
