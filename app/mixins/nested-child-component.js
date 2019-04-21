import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  registeredWithNestedComponent: computed('registerNestedComponent', function() {
    const register = this.get('registerNestedComponent');
    if (typeof register === 'function') {
      return register(this);
    }
  }),
  init() {
    this._super(...arguments);
    this.get('registeredWithNestedComponent');
  }
});
