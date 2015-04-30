Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { Meteor.subscribe('allPosts'); }
});
Router.route('/', {name: 'postsList'});

