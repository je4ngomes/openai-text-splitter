"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.END_PROMPT = exports.SUFFIX_PROMPT = exports.PREFIX_PROMPT = exports.PROMPT_RULES = void 0;
exports.PROMPT_RULES = "\n  The total length of the content is too large to send in only one prompt.\n\n  For this reason, the content has been split into multiple parts.\n  rules:\n\n  [START_PART 1/10]\n  ...\n  [END_PART 1/10]\n\n  Then you just reply: \"Received part 1/10\"\n\n  And when i tell you \"ALL PARTS SENT\", then you can continue processing the data and answering the questions.\n";
exports.PREFIX_PROMPT = "\n  Do not answer yet. This is just another part of the content. Just acknowledge that you received it.\n  [START_PART <PART>/<TOTAL_PARTS>]\n";
exports.SUFFIX_PROMPT = "\n  [END_PART <PART>/<TOTAL_PARTS>]\n  Remember not to answer yet. Just acknowledge that you received it.\n";
exports.END_PROMPT = "\n  ALL PARTS SENT. Now i will ask you the questions.\n";
