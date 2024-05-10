export const PROMPT_RULES = `
  The total length of the content is too large to send in only one prompt.

  For this reason, the content has been split into multiple parts.
  rules:

  [START_PART 1/10]
  ...
  [END_PART 1/10]

  Then you just reply: "Received part 1/10"

  And when i tell you "ALL PARTS SENT", then you can continue processing the data and answering the questions.
`;

export const PREFIX_PROMPT = `
  Do not answer yet. This is just another part of the content. Just acknowledge that you received it.
  [START_PART <PART>/<TOTAL_PARTS>]
`;
export const SUFFIX_PROMPT = `
  [END_PART <PART>/<TOTAL_PARTS>]
  Remember not to answer yet. Just acknowledge that you received it.
`;
export const END_PROMPT = `
  ALL PARTS SENT. Now i will ask you the questions.
`;
