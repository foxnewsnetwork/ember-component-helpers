import Ember from 'ember';
import layout from '../templates/components/component-wrap';

const ComponentWrap = Ember.Component.extend({ layout });
ComponentWrap.reopenClass({
  positionalParams: ["tagName"]
});

export default ComponentWrap;
