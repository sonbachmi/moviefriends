'use server'

import fs from "fs";
import path from "path";

/**
 * Mange user persistence and authentication
 */

const usersDbPath = process.env.USERS_DB_PATH as string ?? path.join(__dirname, 'db', 'users.json')
console.log('Users db path:', usersDbPath)

function getUsers(): User[] {
    try {
        const data = fs.readFileSync(usersDbPath)
        return JSON.parse(data.toString())
    } catch (err: any) {
        console.log(err)
        if (err.message.includes('no such')) {
            fs.appendFile(usersDbPath, '[]', err => {
            })
        }
        return []
    }
}

type User = { id?: string, username: string, password: string }
type UserError = { error: string, message?: string }

export async function createUser({username, password}: User): Promise<User|UserError> {
    const users = getUsers()
    if (users.some(user => user.username === username)) {
        return {
            error: 'exists',
            message: 'Username already exists'
        }
    }
    const user = {
        id: Date.now().toString(),
        username, password
    }
    users.push(user)
    fs.writeFile(usersDbPath, JSON.stringify(users), err => {})
    return user
}

export async function authenticate(username: string, password: string) {
    // Pre-defined fixed credentials for testing convenience
    if (username === 'user' && password === 'user')
        return {
            id: Date.now.toString(),
            name: username
        }
    const users = getUsers()
    const user = users.find(user => user.username === username)
    if (!user || user.password !== password)
        return null
    return {
        id: user.id as string,
        name: user.username as string
    }
}