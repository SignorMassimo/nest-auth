import { Body, Controller, Post } from '@nestjs/common'
import type { User } from '../database/entities/user.entity'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() body: Omit<User, 'id'>) {
        const hasUser = await this.authService.existsUser({ username: body.username })
        if (!hasUser) return await this.authService.register(body.username, body.password)
        return 'username must be unique'
    }

    @Post('login')
    login(@Body() body: Omit<User, 'id'>) {
        return this.authService.login(body.username, body.password)
    }
}
