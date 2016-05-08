import Ember from 'ember';
import { keyword, isEnabled, closureComponent, EmptyObject, assign } from '../-private/component-imports';

const {typeOf, A} = Ember;

function normalizeParams([nameChild, argsChild]) {
  let newParams = A([nameChild]);
  let args = argsChild.compute();
  newParams.pushObjects(args);
  return newParams;
}

function splitArgsHash(params) {
  if (params.length <= 1) {
    return [params, new EmptyObject()];
  }
  let maybeHash = params[params.length - 1];
  if (typeOf(maybeHash) === "object") {
    return [params.slice(0, params.length - 1), assign(new EmptyObject(), maybeHash)];
  } 
  return [params, new EmptyObject()];
}
// Modified from
// https://github.com/emberjs/ember.js/blob/master/packages/ember-htmlbars/lib/keywords/component.js
export default function(morph, env, scope, params, _hash, template, inverse, visitor) {
  const [newParams, newHash] = splitArgsHash(normalizeParams(params));

  if (isEnabled('ember-contextual-components')) {
    if (!morph) {
      return closureComponent(env, newParams, newHash);
    }
  }

  keyword('@element_component', morph, env, scope, newParams, newHash, template, inverse, visitor);
  return true;
}