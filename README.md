# ember-patterns

A collection of design patterns and code solutions I've found helpful in my
experience with Ember.js.

## Contents

* [1 - Components](#1---components)
  * [1-1 - Nested Components](#1-1---nested-components)

## 1 - Components

### 1-1 - Nested Components

Nested components is a pattern for providing child component classes to 
consumers of the parent component, where the parent has already attached some
actions and configuration for the child component in the parent template, 
such that the parent component can then access configuration given by the 
consumer on the child components.

This allows us to pass in named sections of a parent component, while 
allowing the formatting of those sections to be delegated to the child 
components, and simultaneously allowing the parent to access the interfaces of
its iterable children.

#### Files

* app
  * components
    * nested-parent
      * [nested-child.js](app/components/nested-parent/nested-child.js)
    * [nested-parent.js](app/components/nested-parent.js)
  * templates
    * components
      * nested-parent
        * [nested-child.hbs](app/templates/components/nested-parent/nested-child.hbs)
      * [nested-parent.hbs](app/templates/components/nested-parent.hbs)
    * [nested-component.hbs](app/templates/nested-component.hbs)
