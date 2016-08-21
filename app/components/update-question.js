import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,

  actions: {
    questionForm() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      };
        this.set('updateQuestion', false);
        this.sendAction('update', question, params);
    }
  }
});
