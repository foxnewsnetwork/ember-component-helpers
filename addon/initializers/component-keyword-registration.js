import { registerKeyword } from '../-private/component-imports';
import componentApply from '../keywords/component-apply';
export function initialize(/* application*/) {
  registerKeyword('component-apply', componentApply);
}

export default {
  name: 'component-keyword-registration',
  initialize
};
