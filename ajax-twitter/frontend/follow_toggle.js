const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor ($el) {
    this.userId = $el.data("userId");
    this.followState = $el.data("initialFollowState");
    this.$el = $el;
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === 'following' || this.followState === 'unfollowing') {
      $('button').prop("disabled", true);
    } else if (this.followState === 'unfollowed') {
      this.$el.text("Follow!");
      $('button').prop("disabled", false);
    } else {
      this.$el.text("Unfollow!");
      $('button').prop("disabled", false);
    }
  }

  handleClick() {
    this.$el.on("click", (event) => {
      event.preventDefault();
      if (this.followState === 'unfollowed') {
        this.followState = 'following';
        this.render();
        APIUtil.followUser(this.userId).then(() => {
          this.followState = 'followed';
          this.render();
        });
      } else {
        this.followState = 'unfollowing';
        this.render();
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = 'unfollowed';
          this.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;
