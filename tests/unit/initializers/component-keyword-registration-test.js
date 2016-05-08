import Ember from 'ember';
import ComponentKeywordRegistrationInitializer from 'dummy/initializers/component-keyword-registration';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | component keyword registration', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ComponentKeywordRegistrationInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
