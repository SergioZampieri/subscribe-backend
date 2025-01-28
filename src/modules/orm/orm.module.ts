import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Mail } from '../../entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Mail],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }
