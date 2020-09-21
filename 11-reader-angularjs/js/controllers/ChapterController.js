app.controller("ChapterController", ["$scope", "$routeParams", "books", function($scope, $routeParams, books) {
  books.success(function(data) {
    $scope.currentBook = $routeParams.bookId;
    $scope.book = data[$scope.currentBook];
    $scope.chapter = $scope.book.chapters[$routeParams.chapterId];

    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);
