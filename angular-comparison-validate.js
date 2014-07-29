angular.module('comparison-validate', [])
.service('comparisonValidateService', [ function() {
  'use strict';
  function compare(lhs, rhs, compareFunc) {
    // Don't work compare when lhs or rhs are any of the following value.
    if (lhs === '' || rhs === '') { return true; }
    if (lhs === undefined || rhs === undefined) { return true; }
    if (lhs !== lhs || rhs !== rhs) { return true; } //NaN
    if (lhs === null || rhs === null) { return true; }

    return compareFunc(lhs, rhs);
  }
  this.validate = function(validationName, ctrl, lhs, rhs, compareFunc){
    ctrl.$setValidity(validationName, compare(lhs, rhs, compareFunc));
  };
}])
.directive('compLessThan', ['comparisonValidateService', function(validator) {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    scope:{ rhs: '=compLessThan'},
    link: function(scope, element, attrs, ctrl) {
      function validate(viewValue){
        validator.validate('lessThan',ctrl, viewValue, scope.rhs, function(lhs, rhs) { return lhs < rhs; });
        return viewValue;
      }
      ctrl.$parsers.unshift(validate);
      scope.$watch('rhs', function() {
        validate(ctrl.$viewValue);
      });
    }
  };
}])
.directive('compMoreThan', ['comparisonValidateService', function(validator) {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    scope:{ rhs: '=compMoreThan'},
    link: function(scope, element, attrs, ctrl) {
      function validate(viewValue){
        validator.validate('moreThan',ctrl, viewValue, scope.rhs, function(lhs, rhs) { return lhs > rhs; });
        return viewValue;
      }
      ctrl.$parsers.unshift(validate);
      scope.$watch('rhs', function() {
        validate(ctrl.$viewValue);
      });
    }
  };
}])
.directive('compLessThanEqual', ['comparisonValidateService', function(validator) {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    scope:{ rhs: '=compLessThanEqual'},
    link: function(scope, element, attrs, ctrl) {
      function validate(viewValue){
        validator.validate('compLessThanEqual',ctrl, viewValue, scope.rhs, function(lhs, rhs) { return lhs <= rhs; });
        return viewValue;
      }
      ctrl.$parsers.unshift(validate);
      scope.$watch('rhs', function() {
        validate(ctrl.$viewValue);
      });
    }
  };
}])
.directive('compMoreThanEqual', ['comparisonValidateService', function(validator) {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    scope:{ rhs: '=compMoreThanEqual'},
    link: function(scope, element, attrs, ctrl) {
      function validate(viewValue){
        validator.validate('compMoreThanEqual',ctrl, viewValue, scope.rhs, function(lhs, rhs) { return lhs >= rhs; });
        return viewValue;
      }
      ctrl.$parsers.unshift(validate);
      scope.$watch('rhs', function() {
        validate(ctrl.$viewValue);
      });
    }
  };
}])
.directive('compEqual', ['comparisonValidateService', function(validator) {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    scope:{ rhs: '=compEqual'},
    link: function(scope, element, attrs, ctrl) {
      function validate(viewValue){
        validator.validate('compEqual',ctrl, viewValue, scope.rhs, function(lhs, rhs) { return lhs === rhs; });
        return viewValue;
      }
      ctrl.$parsers.unshift(validate);
      scope.$watch('rhs', function() {
        validate(ctrl.$viewValue);
      });
    }
  };
}])
;
