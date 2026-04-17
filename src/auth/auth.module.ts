import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [TypeOrmModule.forFeature([User])]
})
export class AuthModule { }
