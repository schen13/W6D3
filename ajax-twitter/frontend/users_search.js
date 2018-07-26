const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.input = $el.find("input[name=username]");
    this.ul = $el.find(".users");
  }

  handleInput() {
    this.$el.on('input', (event) => {
      APIUtil.searchUsers($(event.currentTarget).serialize());
    });
  }
}

module.exports = UsersSearch;
