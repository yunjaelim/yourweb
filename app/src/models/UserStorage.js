"use strict";

class UserStorage{
  static #users = {
    id: ["harry4717", "나개발", "김팀장"],
    psword: ["1234", "5678", "1357"],
    name: ["박성범", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
          newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
  };
}

module.exports = UserStorage;
