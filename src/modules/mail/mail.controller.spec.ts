import { MikroORM } from '@mikro-orm/core';
import { Test } from '@nestjs/testing';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../../mikro-orm.config';
import { Mail } from '../../entities';
import { MailController } from './mail.controller';

describe('mail controller', () => {

  let mailController: MailController;
  let orm: MikroORM;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRoot({
          ...config,
          dbName: 'nest-mikro-test-db',
          allowGlobalContext: true,
        }),
        MikroOrmModule.forFeature({ entities: [Mail] }),
      ],
      controllers: [MailController],
    }).compile();

    mailController = module.get(MailController);
    orm = module.get(MikroORM);
    await orm.getSchemaGenerator().refreshDatabase();
  });

  afterAll(async () => await orm.close(true));

  it(`Create`, async () => {
    const res1 = await mailController.create({ address: "example@gmail.com" });
    expect(res1.id).toBeDefined();
    expect(res1.address).toBe("example@gmail.com");

    const res2 = await mailController.create({ address: "not_valid_mail" });
    expect(res2).toThrow(Mail.INVALID_MAIL)
  });
});
