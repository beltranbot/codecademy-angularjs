app.directive("feedsterPost", function () {
    return {
        resrtict: "E",
        scope: {
            post: "="
        },
        templateUrl: "js/directives/feedsterPost.html"
    }
})