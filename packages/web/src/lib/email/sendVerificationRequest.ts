import type { SendVerificationRequestParams } from 'next-auth/providers';
import { APP_NAME } from '../../constantes';
import { getServerUrl } from '../server-url';
import { sendEMail } from './sendEmail';

const replaceOrigin = (url: string) => {
  const regex =
    /^(?:https?:\/\/)?(?:[^\n@]+@)?(?:www\.)?([^\n/:]+)(?::\d+)?(\/[^#?]*)?/gim;
  const link = url.replace(regex, '$2');

  return getServerUrl() + link;
};

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
) => {
  const { identifier, url, provider } = params;

  await sendEMail({
    server: provider.server,
    fromEmail: provider.from,
    toEmail: identifier,
    subject: `Your magic link 📣`,
    text: `Hi 👋,

    You are trying to login to this ${APP_NAME} with email ${identifier}.
    
    To login, click on the link below:
    
    ${replaceOrigin(url)}
    
    If you didn't request this login, please ignore this email.
    
    Have a nice day!`,
  });
};
