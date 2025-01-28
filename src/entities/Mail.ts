import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Mail extends BaseEntity {
static INVALID_MAIL:string = "Invalid email address"

  @Property()
  address: string;

  constructor(address: string) {
    super();
    this.assertValidMail(address)
    this.address = address;
  }

  private assertValidMail(email: string): void {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      throw new Error(Mail.INVALID_MAIL);
    }
  }
  
}
