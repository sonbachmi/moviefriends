export async function authenticate(username: string, password: string) {
    // Ideally fetch user credentials from an external provider API
    // But for now just use fixed credentials
    if (username === 'user' && password === 'user')
        return {
            id: Date.now.toString(),
            name: username
        }
    return null
}