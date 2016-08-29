import Ember from 'ember';

export default Ember.Component.extend({
  answerAmount: Ember.computed('answers',function() {
    return this.get(('answers').length);
  }),
  sortBy: ['upvotes:asc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),
  actions: {
    deleteAnswer(answer) {
      if(confirm("Are you sure?")) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upvote(answer) {
      var question = this.get("currentQuestion");
      this.sendAction('upvote', answer, question);
    },
    downvote(answer) {
      var question = this.get("currentQuestion");
      this.sendAction('upvote', answer, question);
    }
  }
});
