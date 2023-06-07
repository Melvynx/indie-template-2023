import { createTransport } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

type SendEMailParams = {
  server: SMTPTransport.Options | string;
  fromEmail?: string;
  toEmail: string;
  subject: string;
  text?: string;
  html?: string;
};

export const sendEMail = async ({
  server,
  fromEmail,
  toEmail,
  subject,
  text,
  html,
}: SendEMailParams) => {
  const transport = createTransport(server);

  const result = await transport.sendMail({
    to: toEmail,
    from: fromEmail,
    subject,
    html,
    text,
  });

  const failed = result.rejected.concat(result.pending).filter(Boolean);

  if (failed.length > 0) {
    console.error(`Email(s) (${failed.join(', ')}) could not be sent`);
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
  }

  return result;
};
