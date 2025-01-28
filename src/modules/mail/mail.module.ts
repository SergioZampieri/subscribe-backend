import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { OrmModule } from '../orm/orm.module';

@Module({
  imports: [OrmModule],
  controllers: [MailController],
  providers: [],
})
export class MailModule {}
