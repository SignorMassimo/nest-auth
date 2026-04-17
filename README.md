# nestjs-auth

```typescript
// aurh/auth.module.ts
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
```

```typescript
// database/database.module.ts
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
```

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModuleModule } from './database/database.module';

@Module({
  imports: [AuthModule, DatabaseModuleModule] // import recipe modules
})
export class AppModule { }
```
