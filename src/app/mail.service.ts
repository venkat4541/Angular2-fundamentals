import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message = [
    `You're now friends with John`,
    `John liked your tweet`,
    `You'll never believe him!`
  ];
  constructor() { }

}
