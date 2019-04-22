import Component from '@ember/component';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.get('registeredWithNestedComponent');
  },
  registeredWithNestedComponent: computed('registerNestedComponent', function() {
    const register = this.get('registerNestedComponent');
    if (typeof register === 'function') {
      return register(this);
    }
  }),
  childInterfaceProperty: reads('childProperty'),
});
