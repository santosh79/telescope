var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];

if(Posts.find().count() === 0) {
  _.each(postsData, function(post) {
    var mergedPost = _.extend(post, {flagged: false, author: 'bob-smith', category: 'Javascript'});
    Posts.insert(mergedPost);
  });
}

