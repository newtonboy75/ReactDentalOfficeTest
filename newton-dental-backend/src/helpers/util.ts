import crypto from 'crypto';

const SECRET = 'NEWTON-REST-API'

export const random = (n: number) => crypto.randomBytes(n).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}