import Component from '@ember/component';
import { filter, mapBy } from '@ember/object/computed';
import { schedule } from '@ember/runloop';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('registeredNestedComponents', []);
  },
  unfilteredChildProperties: mapBy('registeredNestedComponents', 'childInterfaceProperty'),
  childProperties: filter('unfilteredChildProperties', f => f),
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
