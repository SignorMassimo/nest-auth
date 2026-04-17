import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as jwt from 'jsonwebtoken'
import { Repository } from 'typeorm'
import { User } from '../database/entities/user.entity'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) { }

    async existsUser(where: Partial<User>) {
        return await this.userRepo.exists({ where })
    }

    async register(username: string, password: string) {
        const user = this.userRepo.create({ username, password })
        return this.userRepo.save(user)
    }

    async login(username: string, password: string) {
        const user = await this.userRepo.findOne({ where: { username } })
        if (!user || user.password !== password) throw new Error('Invalid credentials')
        const token = jwt.sign({ id: user.id }, 'secret123')
        return { token }
    }
}
