import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question', ((answer.question).question_id));
    }
    // upvote(answer, question) {
    //   var newVote = answer.get('upvotes') + 1;
    //   answer.set('upvotes', newVote);
    //   answer.save();
    //   this.transitionTo('question', question);
    // },
    // downvote(answer, question) {
    //   var newVote = answer.get("upvotes") - 1;
    //   answer.set("upvotes", newVote);
    //   answer.save();
    //   this.transitionTo('question', question);
    // },

  }
});
