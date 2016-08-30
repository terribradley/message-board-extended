import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      if(confirm("Are you sure?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }

});
