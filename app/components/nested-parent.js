import Component from '@ember/component';
import { filter, mapBy } from '@ember/object/computed';

import NestedParentComponentMixin from 'ember-patterns/mixins/nested-parent-component';

export default Component.extend(
  NestedParentComponentMixin,
{
  unfilteredChildProperties: mapBy('registeredNestedComponents', 'childInterfaceProperty'),
  childProperties: filter('unfilteredChildProperties', f => f),
});
