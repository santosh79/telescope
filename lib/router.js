Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { Meteor.subscribe('allPosts'); }
});
Router.route('/', {name: 'postsList'});

