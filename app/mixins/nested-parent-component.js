import Mixin from '@ember/object/mixin';
import { schedule } from '@ember/runloop';

export default Mixin.create({
  init() {
    this._super(...arguments);
    this.set('registeredNestedComponents', []);
  },
  registerNestedComponent(child) {
    schedule('actions', () => {
      this.get('registeredNestedComponents').pushObject(child);
    });
  },
  actions: {
    registerNestedComponent(child) {
      this.registerNestedComponent(child);
    }
  },
});
