import { prisma } from '@quizly/prisma';
import { stripe } from './stripe';

export const setupStripeCustomer = async (user: {
  email?: string | null;
  name?: string | null;
  id: string;
}) => {
  if (!user.email) {
    return;
  }

  return stripe.customers
    .create({
      email: user.email,
      name: user.name ?? '',
    })
    .then(async (customer) => {
      // Use the Prisma Client to update the user in the database with their new Stripe customer ID

      return prisma.user.update({
        where: { id: user.id },
        data: {
          stripeCustomerId: customer.id,
        },
      });
    });
};
