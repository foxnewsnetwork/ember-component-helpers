import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | append');

test('visiting /append', function(assert) {
  visit('/append');

  andThen(function() {
    assert.equal(currentURL(), '/append');

    let link = this.find("a.x-append");
    assert.equal(link.length, 1, "the link should be there");
  });
});
