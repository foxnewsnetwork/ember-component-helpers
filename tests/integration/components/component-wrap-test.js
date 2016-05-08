import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-wrap', 'Integration | Component | component wrap', {
  integration: true
});

test('it renders', function(assert) {
  // Template block usage:
  this.render(hbs`
    <ul>
      {{#component-wrap "li" class="apple-store"}}
        template block text
      {{/component-wrap}}
    </ul>
  `);

  assert.equal(this.$("li.apple-store").text().trim(), 'template block text');
});
