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
        content: this.get('content') ? this.get('content') : ""
      };
      this.set('addNewAnswer', false);
        {{debugger}}
      this.sendAction('save2', params);
    }
  }
});
