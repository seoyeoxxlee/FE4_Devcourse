import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const users = []; // 실제론 DB 사용 권장

export async function createUser({ name, email, password }) {
  const hashed = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashed,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
}

export function findUserByEmail(email) {
  return users.find((u) => u.email === email);
}

export function findUserById(id) {
  return users.find((u) => u.id === id);
}
