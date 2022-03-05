import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { Company, Specialty } from './company.interface';
import { CompanyService } from './company.service';

describe('CompanyController', () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService],
    }).compile();

    companyController = module.get<CompanyController>(CompanyController);
    companyService = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(companyController).toBeDefined();
  });

  it('should return an array of companies', () => {
    const result: Company[] = [
      {
        id: 'id',
        name: 'Test Company',
        specialties: [Specialty.Masonry, Specialty.Electrical],
        img: 'img.png',
        city: 'City',
      },
    ];

    jest.spyOn(companyService, 'findAll').mockImplementation(() => result);

    expect(companyController.findAll()).toEqual(result);
  });
});
