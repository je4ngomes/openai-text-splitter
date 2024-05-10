# OpenAI Text Splitter

Openai prompt splitter. Dividing large texts into manageable parts for processing with OpenAI APIs.
A library inspired by [chatgpt-prompt-splitter](https://github.com/jupediaz/chatgpt-prompt-splitter) to divide large texts into smaller parts for efficient processing with OpenAI APIs.

## Installation

```bash
  npm install openai-text-splitter
```

## Usage

### Arguments

| Argument              | Description                                |
| --------------------- | ------------------------------------------ |
| `text`                | The input text to be split into parts.     |
| `textChunkLength`     | The maximum length of each text chunk.     |
| `tokenLimitPerPrompt` | The token limit per prompt for OpenAI API. |

### Returns

| Field        | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| `parts`      | An array containing the split text parts, each with its role and content. |
| `totalParts` | The total number of text parts generated.                                 |

```typescript
import {splitTextForOpenAI} from 'openai-text-splitter';

const text = 'Your large text here...';
const textChunkLength = 500;
const tokenLimitPerPrompt = 2048;

const result = splitTextForOpenAI({text, textChunkLength, tokenLimitPerPrompt});
```
