import {isWithinTokenLimit} from 'gpt-tokenizer';

import {
  END_PROMPT,
  PREFIX_PROMPT,
  PROMPT_RULES,
  SUFFIX_PROMPT,
} from './constants';

interface Options {
  text: string;
  textChunkLength: number;
  tokenLimitPerPrompt: number;
}

interface Message {
  role: string;
  content: string;
}

export const openAiTextSplitter = (
  text: string,
  {textChunkLength = 10, tokenLimitPerPrompt = 400} = {} as Options,
): Message[] => {
  // use isWithinTokenLimit to check if the text is within the token limit if not keep splitting
  let parts: string[] = [];

  let currentPart = '';

  while (text?.length > 0) {
    const chunk = text.slice(0, textChunkLength);
    currentPart += chunk;
    const isNextChunkEmpty = text.slice(textChunkLength).length === 0;

    if (
      !Number.isInteger(isWithinTokenLimit(currentPart, tokenLimitPerPrompt)) ||
      isNextChunkEmpty
    ) {
      parts = [
        ...parts,
        `${PREFIX_PROMPT}${currentPart}${SUFFIX_PROMPT}`.replaceAll(
          '<PART>',
          `${parts.length + 1}`,
        ),
      ];
      currentPart = '';
    }

    text = text.slice(textChunkLength);
  }

  // add end_prompt
  parts = [...parts.slice(0, -1), `${parts[parts.length - 1]}${END_PROMPT}`];

  const menssages = parts.map((part) => ({
    role: 'user',
    content: part.replaceAll('<TOTAL_PARTS>', `${parts.length}`),
  }));

  return menssages;
};
