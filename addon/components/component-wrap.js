import Component from '@ember/component';
import layout from '../templates/components/component-wrap';

const ComponentWrap = Component.extend({ layout });
ComponentWrap.reopenClass({
  positionalParams: ["tagName"]
});

export default ComponentWrap;
