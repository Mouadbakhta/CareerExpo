import crypto from 'crypto';

const ADMIN_EMAIL = 'club.emje.2025@gmail.com';
const ADMIN_PASSWORD_HASH = '12d23d5bf31712f1d40f2a44026743e4b4bf8efe9246f183267df9d95f7b77b2';

export const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const authenticateAdmin = (email, password) => {
  if (email !== ADMIN_EMAIL) return false;
  const hashedPassword = hashPassword(password);
  return hashedPassword === ADMIN_PASSWORD_HASH;
};

export const isAuthenticated = () => {
  return localStorage.getItem('adminAuthenticated') === 'true';
};

export const login = () => {
  localStorage.setItem('adminAuthenticated', 'true');
};

export const logout = () => {
  localStorage.removeItem('adminAuthenticated');
};
