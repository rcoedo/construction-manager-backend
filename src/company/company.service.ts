import { Injectable } from '@nestjs/common';
import { Company } from './company.interface';
import * as companies from '../fixtures/companies.json';

@Injectable()
export class CompanyService {
  findAll(): Company[] {
    return companies as Company[];
  }
}
