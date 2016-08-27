import Ember from 'ember';

export default Ember.Component.extend({
  questionList: Ember.inject.service(),

  actions: {
    addToList(item) {
      this.get('questionList').add(item);
    }
  }
});
