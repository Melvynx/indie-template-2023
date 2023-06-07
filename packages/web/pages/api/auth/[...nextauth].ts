import NextAuth from 'next-auth';
import { authOptions } from '../../../src/lib/nextauth';

export default NextAuth(authOptions);
