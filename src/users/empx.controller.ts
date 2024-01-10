import { Controller, Get, Redirect } from '@nestjs/common';
import { EmpxService } from './empx.service';

@Controller('empx')
export class EmpxController {
  constructor(private readonly empxService: EmpxService) {}

  @Get('/empxx')
  getEmpx() {
    return this.empxService.getEmpxCount();
  }

  @Redirect('/empx/empxx')
  @Get('/empx-redirect')
  getEmpxCount() {
    return 'EMPXXXXXXXXX';
  }
}
