import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  notes: DS.attr(),
  question: DS.attr(),
  "answers": DS.hasMany('answer', { async: true})
});
