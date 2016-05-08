# Ember-component-helpers
[![Build Status](https://travis-ci.org/foxnewsnetwork/ember-component-helpers.svg?branch=master)](https://travis-ci.org/foxnewsnetwork/ember-component-helpers)

Some handlebar helpers for working with Ember components

## Available Helpers
* [`component-apply`](#component-apply)
* [`component-wrap`](#component-wrap)

## Usage Examples

#### `component-apply`
Ember's regular `component` is to `Function#call` as `component-apply` is to `Function#apply`

Consider the following example of calling Ember's `link-to` component:
```handlebars
{{#component "link-to" "dashboard.post.index" post}}
  {{post.content}}
{{/component}}
```
Now with `component-apply` (and the `append` helper from [ember-composable-helpers](https://www.npmjs.com/package/ember-composable-helpers))
```handlebars
{{#component-apply "link-to" (array "dashboard.post.index" post)}}
  {{post.content}}
{{/component-apply}}
```
This is particularly useful while we wait for https://github.com/wycats/handlebars.js/pull/1149 to come out

* limitations: requires Ember 2.0 and above (sorry)
** limitations: the array you pass in shouldn't be dynamic


#### `component-wrap`
Wraps a vanilla HTML tag into an element, useful for components which demand a parentView such as tooltips from [ember-tooltips](https://www.npmjs.com/package/ember-tooltips)

```handlebars
{{#component-wrap "li" class="mdl-list__item"}}
  {{#tooltip-on-parent}}
    You don't have to use data-tooltip-content + separate js call anymore!
  {{/tooltip-on-parent}}
  Brian Cranston
{{/component-wrap}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
