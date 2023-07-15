// TODO: write your code here

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const data = await read();
        const value = await json(data);
        return JSON.parse(value);
      } catch (e) {
        return e;
      }
    })();
  }
}
