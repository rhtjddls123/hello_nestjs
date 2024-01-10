import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    console.log('*************************');

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/x (GET)', () => {
    return request(app.getHttpServer())
      .get('/x')
      .expect(200)
      .expect('xxxxxxxxxxxxxxxx');
  });

  describe('Users Module', () => {
    it('/users/100', () => {
      return request(app.getHttpServer())
        .get('/users/100')
        .expect(200)
        .expect({ id: 100, name: '홍길동' });
    });
  });
});
