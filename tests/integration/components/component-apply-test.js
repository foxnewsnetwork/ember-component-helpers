import { A } from '@ember/array';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { initialize } from 'ember-component-helpers/initializers/component-keyword-registration';

moduleForComponent('component-apply', 'Integration | Component | component apply', {
  integration: true,
  setup() {
    initialize();
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set("arrayArgs", A(["index", {class: "applejacks"}]));

  // Template block usage:
  this.render(hbs`
    {{#component-apply "link-to" arrayArgs}}
      template block text
    {{/component-apply}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$("a.applejacks").length, 1);
});

