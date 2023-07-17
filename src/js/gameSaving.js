export default class GameSaving {
  constructor(json) {
    this.id = json.id;
    this.created = json.created;
    this.userInfo = {
      id: json.userInfo.id,
      name: json.userInfo.name, // user name
      level: json.userInfo.level, // user level
      points: json.userInfo.points, // user points
    };
  }
}
