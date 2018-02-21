import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
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
