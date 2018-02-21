import { A } from '@ember/array';
import Controller from '@ember/controller';

export default Controller.extend({
  ctrlArray: A(["posts.post.view", 622, { class: "ctrl-array" }])
});
