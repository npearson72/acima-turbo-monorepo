import { helloWorld } from '@acima/utils';

const message = `Hi from content script. This is shared: ${helloWorld()}`;

chrome.runtime.sendMessage(message, response => {
  console.log(response);
});

export {};
