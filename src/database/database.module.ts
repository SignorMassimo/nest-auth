import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'main.sqlite',
            entities: [User],
            synchronize: true
        })
    ]
})
export class DatabaseModuleModule { }
