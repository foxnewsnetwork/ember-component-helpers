import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("arg-pass");
  this.route("regular");
  this.route("append");
  this.route("posts", {path: "/posts"}, function() {
    this.route("post", {path: "/post/:post_id"}, function() {
      this.route("view");
    });
  });
});

export default Router;
