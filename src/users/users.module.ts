import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmpxController } from './empx.controller';
import { EmpxService } from './empx.service';

@Module({
  controllers: [UsersController, EmpxController],
  providers: [UsersService, EmpxService],
})
export class UsersModule {}
