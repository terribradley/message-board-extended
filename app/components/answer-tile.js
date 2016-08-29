import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      if(confirm("Are you sure?")) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upvote(answer) {
      var question = this.get("currentQuestion");
      this.sendAction('upvote', answer, question);
    }
  }
});
