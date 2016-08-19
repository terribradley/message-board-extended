import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('question', {path: '/question/:question_id'});
  this.route('answer', {path: '/answer/:answer_id'});
});

export default Router;
