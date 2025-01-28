import { Body, Controller, HttpException, HttpStatus, Post, } from '@nestjs/common';
import { EntityRepository, EntityManager } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Mail } from '../../entities';

@Controller('mail')
export class MailController {

  constructor(
    @InjectRepository(Mail) private readonly mailRepository: EntityRepository<Mail>,
    private readonly em: EntityManager,
  ) { }

  @Post()
  async create(@Body() body: any) {
    if (!body.address) {
      throw new HttpException('Email Address is missing', HttpStatus.BAD_REQUEST);
    }

    const mail = this.mailRepository.create(body);
    await this.em.flush();

    return mail;
  }
}
