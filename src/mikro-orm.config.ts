import { Logger } from '@nestjs/common';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { defineConfig } from '@mikro-orm/mysql';
import { Mail, BaseEntity } from './entities';

const logger = new Logger('MikroORM');

export default defineConfig({
  entities: [Mail, BaseEntity],
  dbName: 'mikro-orm-nest-ts',
  port: 3307,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
});
