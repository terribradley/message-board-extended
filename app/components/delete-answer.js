import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if(confirm("Are you sure?")) {
        this.SendAction('destroyAnswer', answer);
      }
    }
  }
});
