(function () {
    var app = angular.module('app', ['google-maps'.ns()]);

    // Configure the Angular-Google-Maps provider
    app.config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyDWOU36_aLESVSSCFsrk4WdH9Q1mXdamgo',
            v: 'weekly',
            libraries: 'weather,geometry,visualization'
        });
    }]);
})();