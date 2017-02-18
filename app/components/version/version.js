'use strict';

angular.module('coffee.version', [
  'coffee.version.interpolate-filter',
  'coffee.version.version-directive'
])

.value('version', '0.1');
