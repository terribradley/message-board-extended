import Ember from 'ember';

export default Ember.Component.extend({
  questionList: Ember.inject.service(),
  answerAmount: Ember.computed('question.answers', function() {
   var answerTotal = this.get('question.answers.length');
   if ( !answerTotal) {
     return "No answers yet!";
   } else if (answerTotal === 1){
     return "This only has " + answerTotal.toString() + " answer.";
   } else if (answerTotal < 4) {
     return "This one need's help! It only has " + answerTotal.toString() + " answers.";
   } else if (answerTotal > 5) {
     return "Look at the red icon above! This one is popular. It has " + answerTotal.toString() + " answers.";
   }
 }),

  actions: {
    addToList(item) {
      this.get('questionList').add(item);
    }
  }
});
