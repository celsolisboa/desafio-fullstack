import bcrypt from "bcrypt-nodejs";

export function encryptPassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
