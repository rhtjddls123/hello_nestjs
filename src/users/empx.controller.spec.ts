import { Test, TestingModule } from '@nestjs/testing';
import { EmpxController } from './empx.controller';
import { EmpxService } from './empx.service';

describe('EmpxController', () => {
  let controller: EmpxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpxController],
      providers: [EmpxService],
    }).compile();

    controller = module.get<EmpxController>(EmpxController);
  });

  it('getEmpxCount', () => {
    expect(controller.getEmpxCount()).toBe(999);
  });
});
