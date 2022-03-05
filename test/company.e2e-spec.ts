import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CompanyModule } from '../src/company/company.module';

describe('CompanyController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CompanyModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const req = await request(app.getHttpServer()).get('/companies');

    expect(req.statusCode).toEqual(200);
    expect(req.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "city": "Madrid",
          "id": "3a1bd165-4ec0-416b-b3de-5fe9bbec2535",
          "img": "supplypipe.png",
          "name": "Supplypipe",
          "specialties": Array [
            "Plumbing",
            "Electrical",
          ],
        },
        Object {
          "city": "Barcelona",
          "id": "92a7a561-e67e-4913-9aa1-acdb902e820c",
          "img": "moderncog.png",
          "name": "Modern Cog",
          "specialties": Array [
            "Excavation",
          ],
        },
        Object {
          "city": "Berlin",
          "id": "8bfd422f-36b4-47d0-8ced-e6ba0033f926",
          "img": "pumpshed.png",
          "name": "Pumpshed",
          "specialties": Array [
            "Plumbing",
          ],
        },
        Object {
          "city": "Paris",
          "id": "b65392fc-c603-4d91-9a43-92ab8f5b04f2",
          "img": "electrosentry.png",
          "name": "Electrosentry",
          "specialties": Array [
            "Electrical",
          ],
        },
        Object {
          "city": "London",
          "id": "37966097-c070-48a2-9730-fd3853d8292e",
          "img": "hydropipeline.png",
          "name": "Hydro Pipeline",
          "specialties": Array [
            "Plumbing",
            "Excavation",
          ],
        },
        Object {
          "city": "Roma",
          "id": "4a50139d-c21f-47d7-a7bf-996fca1c9e7c",
          "img": "gridwire.png",
          "name": "Gridwire",
          "specialties": Array [
            "Electrical",
          ],
        },
        Object {
          "city": "Viena",
          "id": "d07eefc7-59e3-492b-834a-aabaad1e9e5a",
          "img": "powerworkshop.png",
          "name": "Power Workshop",
          "specialties": Array [
            "Excavation",
            "Plumbing",
            "Electrical",
          ],
        },
        Object {
          "city": "Amsterdam",
          "id": "d3a83948-43eb-402e-ad8a-fbda97a7ca1c",
          "img": "builtia.png",
          "name": "builtia",
          "specialties": Array [
            "Masonry",
            "Carpentry",
          ],
        },
        Object {
          "city": "Madrid",
          "id": "50c88ed4-a348-490e-94af-8957263d010b",
          "img": "motionbuilt.png",
          "name": "motionbuilt",
          "specialties": Array [
            "Masonry",
            "Carpentry",
          ],
        },
        Object {
          "city": "Barcelona",
          "id": "dc356749-9f74-48da-9a8a-cf247e59c029",
          "img": "artisanreport.png",
          "name": "Artisan Report",
          "specialties": Array [
            "Masonry",
            "Carpentry",
            "Electrical",
          ],
        },
        Object {
          "city": "Viena",
          "id": "1b8875eb-9a14-4609-9114-cefe40908d3b",
          "img": "protoric.png",
          "name": "protoric",
          "specialties": Array [
            "Electrical",
            "Plumbing",
            "Carpentry",
          ],
        },
        Object {
          "city": "London",
          "id": "76152dd8-6a56-4f12-b974-943bd51773a1",
          "img": "buildfolk.png",
          "name": "Build Folk",
          "specialties": Array [
            "Masonry",
            "Excavation",
            "Carpentry",
          ],
        },
        Object {
          "city": "Berlin",
          "id": "4e367701-a0fd-493f-a897-dca89102235f",
          "img": "architus.png",
          "name": "architus",
          "specialties": Array [
            "Masonry",
          ],
        },
        Object {
          "city": "Paris",
          "id": "3e756aaa-76f3-48e3-9ebf-3ecceae77677",
          "img": "machinebasics.png",
          "name": "Machine Basics",
          "specialties": Array [
            "Excavation",
            "Masonry",
          ],
        },
        Object {
          "city": "Berlin",
          "id": "29dff5b0-08e1-4d96-aa06-69596105db50",
          "img": "projecture.png",
          "name": "Projecture",
          "specialties": Array [
            "Carpentry",
            "Electrical",
            "Excavation",
            "Masonry",
            "Plumbing",
          ],
        },
        Object {
          "city": "Barcelona",
          "id": "0743082d-9f5c-4abb-a4c1-e04dade5ff68",
          "img": "craftycenter.png",
          "name": "Crafty Center",
          "specialties": Array [
            "Carpentry",
          ],
        },
        Object {
          "city": "Madrid",
          "id": "ac0cf972-3c1d-4e46-b2e3-f6909f3ec3bf",
          "img": "rexonix.png",
          "name": "rexonix",
          "specialties": Array [
            "Masonry",
          ],
        },
        Object {
          "city": "Paris",
          "id": "0914ac1d-c2a7-41e5-a306-d95b42bb3fc5",
          "img": "workovia.png",
          "name": "Workovia",
          "specialties": Array [
            "Electrical",
            "Masonry",
            "Plumbing",
          ],
        },
        Object {
          "city": "Berlin",
          "id": "7be500fe-b9f7-434f-9007-7abf7d612dc3",
          "img": "argitect.png",
          "name": "Argitect",
          "specialties": Array [
            "Masonry",
            "Electrical",
            "Plumbing",
            "Carpentry",
          ],
        },
        Object {
          "city": "Roma",
          "id": "b89c397f-fae5-41bd-9a1f-f435da9fd9d4",
          "img": "leverie.png",
          "name": "Leverie",
          "specialties": Array [
            "Excavation",
            "Masonry",
          ],
        },
      ]
    `);
  });
});
