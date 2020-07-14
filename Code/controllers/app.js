var user;

var app = angular.module('view', []);

app.service("sampleService", function () {
    this.mySet = function(val){
        this.user = val;
        return user;
    };
    this.myGet = function(){
        return this.user;
    };
});