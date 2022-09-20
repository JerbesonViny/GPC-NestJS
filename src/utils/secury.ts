import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

export async function encrypt(text: string): Promise<string> {
  return await bcrypt.hash(text, parseInt(process.env.ENCRYPT_SALT));
}

export async function compare(
  compared: string,
  hashed: string,
): Promise<boolean> {
  return await bcrypt.compare(compared, hashed);
}
