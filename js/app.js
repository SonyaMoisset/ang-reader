var app = angular.module('ReaderApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/books", {
      controller: "BookshelfController",
      templateUrl: "js/views/bookshelf.html"
    })
    .when("/books/:bookId", {
      controller: "BookController",
      templateUrl: "js/views/book.html"
    })
    .when("/books/:bookId/chapters/:chapterId", {
      controller: "ChapterController",
      templateUrl: "js/views/chapter.html"
    })
    .otherwise({
      redirectTo: "/books"
    });
});
