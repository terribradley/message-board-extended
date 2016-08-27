import Ember from 'ember';

export default Ember.Component.extend({
  questionList: Ember.inject.service(),
  actions: {
    empty() {
      this.set('questionList.items', []);
    },
    remove(item) {
      var duplicateQuestionList = this.get('questionList.items').slice();
      var removeOneQuestion = duplicateQuestionList.indexOf(item);
      duplicateQuestionList.splice('removeOneQuestion', 1);
      this.set("questionList.items", duplicateQuestionList);
    }
  }
});
