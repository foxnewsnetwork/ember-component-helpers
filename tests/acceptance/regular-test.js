import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | regular');

test('visiting /regular', function(assert) {
  visit('/regular');

  andThen(function() {
    assert.equal(currentURL(), '/regular');

    let link = this.find("a.ctrl-array");
    assert.equal(link.length, 1, "the link should be there");
  });
});
