import { z } from 'zod';

export const ChatGPTAgentSchema = z.enum(['assistant', 'system', 'user']);
export type ChatGPTAgent = z.infer<typeof ChatGPTAgentSchema>;

export const ChatGPTMessageScheme = z.object({
  role: ChatGPTAgentSchema,
  content: z.string(),
});
export type ChatGPTMessage = z.infer<typeof ChatGPTMessageScheme>;

export type ChatGPTMessages = ChatGPTMessage[];

export type OpenAIStreamPayload = {
  model: string;
  messages: ChatGPTMessages;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  n: number;
};
