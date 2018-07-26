const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$( () => {
  const buttons = $('.follow-toggle');
  buttons.each( (idx, button) => {
    new FollowToggle($(button));
  });

  const searches = $('.users-search');
  searches.each( (idx, search) => {
    new UsersSearch($(search));
  });
});
