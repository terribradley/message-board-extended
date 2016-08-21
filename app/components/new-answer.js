import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    newAnswerForm() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        content: this.get('content') ? this.get('content') : "",
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
