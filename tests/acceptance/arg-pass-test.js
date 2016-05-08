import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | arg pass');

test('visiting /arg-pass', function(assert) {
  visit('/arg-pass');

  andThen(function() {
    assert.equal(currentURL(), '/arg-pass');

    let link = this.find("a.arg-pass-link");
    assert.equal(link.length, 1, "the link should be there");
  });
});
