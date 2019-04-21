import Component from '@ember/component';
import { reads } from '@ember/object/computed';

import NestedChildComponentMixin from 'ember-patterns/mixins/nested-child-component';

export default Component.extend(
  NestedChildComponentMixin,
{
  childInterfaceProperty: reads('childProperty'),
});
