BlogApp.controller('BlogController', ['$scope', function($scope){
  $scope.newPost={};
  $scope.read = true;
  $scope.selected = {value: 0};
  $scope.showmodal={};
  $scope.index=null;
  $scope.posts = [
    {title: "5 Keys to Happiness", author: "angello", content: "If you're not happy and you know it read along.You've watched 'Seinfeld're-runs, splurged on yourself and downed pints of Ben and Jerry's. Nothing's helping. Maybe you're one of the 20 million Americans diagnosed with depression, you're bottoming out or you just want something to improve your day."},
    {title: "7 keys to longer life", author: "angello", content: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."}

  ];

  $scope.addpost = function() {
    console.log('submitting');
    $scope.posts.push({title: $scope.newPost.title, content: $scope.newPost.content, author: $scope.newPost.author});
    $scope.newPost= ({title: '', content:'', author: ''});
    $scope.read=true;
  }

    $scope.delete = function(index) {
    console.log(index);
    $scope.posts.splice(index,1);

  }

    $scope.show = function(index) {
      console.log($scope.posts[index]);
      $scope.newPost=$scope.posts[index];
     $('#modalupdate').modal();
     $scope.index=index;
     console.log($scope.index);
  }

   $scope.savePost=function(){
    console.log("updating");
     $scope.posts[$scope.index].title = $scope.newPost.title;
     $scope.posts[$scope.index].author = $scope.newPost.author;
     $scope.posts[$scope.index].content = $scope.newPost.content;
     $scope.index=null;
     $scope.newPost={};

   }

}]);
