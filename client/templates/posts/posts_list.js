Template.postsList.helpers({
  posts: function() {
    var allPosts = Posts.find({category: 'Javascript'});
    return allPosts;
  }
});
