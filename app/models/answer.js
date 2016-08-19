import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', { async: true })

});
