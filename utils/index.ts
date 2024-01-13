import jwt, { JwtPayload } from 'jsonwebtoken'

export const decodeJWT = (token: string): { username: string | null, id: string | null } => {
    const decoded = jwt.decode(token) as JwtPayload | null;
    if (decoded) {
      const { username, id } = decoded;
      return { username: username as string, id: id as string };
    }
    return { username: null, id: null };
  }