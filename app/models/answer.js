import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', { async: true })
  upvotes: DS.attr()
});
