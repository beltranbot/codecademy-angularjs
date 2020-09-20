app.controller('MainController', ['$scope', function ($scope) {
  $scope.programs = [
    {
      series: "The Terror",
      series_img: "img/terror.jpg",
      genre: "Horror/Drama",
      season: 1,
      episode: "Punished, as a Boy",
      description: "A cunning attack on the ships proves the men are not battling an ordinary bear and that the region's Inuit culture may hold a key to their survival.",
      datetime: new Date(2018, 03, 03, 21, 00, 00, 00)
    },
    {
      series: "Westworld",
      series_img: "img/westworld.jpg",
      genre: "Sci-Fi",
      season: 2,
      episode: "Akane no Mai",
      description: "Shogun World extends a welcome to all.",
      datetime: new Date(2018, 04, 20, 21, 00, 00, 00)
    },
    {
      series: "Channel Zero",
      series_img: "img/channel-zero.jpg",
      genre: "Sci-Fi",
      season: 3,
      episode: "The Red Door",
      description: "Zoe discovers there's something else living in the summer house; Alice reaches the point of no return.",
      datetime: new Date(2018, 02, 07, 21, 00, 00, 00)
    },
    {
      series: "Vikings",
      series_img: "img/vikings.jpg",
      genre: "Action-Adventure",
      season: 5,
      episode: "Moments of Vision",
      description: "A sense of doom looms over Kattegat as bloodshed ensues; the defeated army flees in the face of the victors, and a legendary warrior makes his way home.",
      datetime: new Date(2018, 00, 24, 21, 00, 00, 00)
    },
    {
      series: "F is for Family",
      series_img: "img/fisforfamily.jpg",
      genre: "Comedy",
      season: 2,
      episode: "The Liar's Club",
      description: "Sue learns that there is a major downside to office life; Frank begrudgingly plans to visit the unemployment office; Kevin gets a space of his own.",
      datetime: new Date(2017, 04, 30, 00, 00, 00, 00)
    }
  ];
}]);
