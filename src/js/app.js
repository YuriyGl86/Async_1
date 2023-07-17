// TODO: write your code here

import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const data = await read();
        const value = await json(data);
        return new GameSaving(JSON.parse(value));
      } catch (e) {
        return e;
      }
    })();
  }
}
