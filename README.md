angular-comparison-validate
============================

- This directive allow you to add angular validation pattern.("less than" and "more than" and like more.)

- This directive support interactive validation between two components.

Requirements
============================

- AngularJS

Demo
============================
under construction..

Installation using Bower
============================
```
bower install angular-comparison-validate
```

Usage
============================

## example
```
<form name="form">
  //.. some code
  <input name="fromDate" ng-model="fromDate" comp-less-than-equal="toDate">
  <input name="toDate" ng-model="toDate" comp-more-than-equal="fromDate">
  //.. some code
</form>

<p ng-show="form.fromDate.$error.compLessThanEqual">"less than equal" validation error!</p>
<p ng-show="form.toDate.$error.compMoreThanEqual">"more than equal" validation error!</p>
```

## description
These directive require "ng-model" and self("comp-xxxx") argument.

These allow you to add validation pattern of comparison operator.

Argument of "ng-model" is left hand side and argument of "comp-xxxx" is right hand side.

And support interactive validation between two components so watch argument.


## directives
- comp-less-than-equal
- comp-more-than-equal
- comp-less-than
- comp-more-than
- comp-equal

## supplementary explanation
- Component is judged to be normal when lhs or rhs are any of the following value.

    - ''
    - undefined
    - NaN
    - null

- These directive use operator method of JavaScript.
  The operation of the self-made object can not be guaranteed.

Release Notes
============================
# 0.0.1
- First release

# 0.0.3
- deal with installation using bower

