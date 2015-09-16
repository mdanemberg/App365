'use strict';

angular.module('365.services', [])
  .factory('AppRequest', function($http, $q) {
    return {
      get: function() {
        // the $http API is based on the deferred/promise APIs exposed by the $q service
        // so it returns a promise for us by default
        return $http.get('data/365.json')
          .then(function(response) {
              return response.data;
            }, function(response) {
            // something went wrong
            return $q.reject(response.data);
          });
      }
    };
  });
