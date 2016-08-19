import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,

  actions: {
    questionForm() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes')
      };
        this.set('updateQuestion', false);
        this.sendAction('update', question, params);
    }
  }
});
