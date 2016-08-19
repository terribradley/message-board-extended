import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionForm() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
