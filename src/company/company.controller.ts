import { Controller, Get } from '@nestjs/common';
import { Company } from './company.interface';
import { CompanyService } from './company.service';

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  findAll(): Company[] {
    return this.companyService.findAll();
  }
}
