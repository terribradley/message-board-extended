import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    newAnswerForm() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        answer: this.get('answer') ? this.get('answer') : ""
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
