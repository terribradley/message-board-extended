import Ember from 'ember';

export function popularQuestion(params) {
  var question = params[0];

 if(question.get('answers').get('length') >= 4) {
   return Ember.String.htmlSafe('<img src="../img/icon.png" alt="icon"/>');
 }
}

export default Ember.Helper.helper(popularQuestion);
