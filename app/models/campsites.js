import DS from 'ember-data';

export default DS.Model.extend({
  NAME: DS.attr('string'),
  STATE: DS.attr('string'),
  LAT: DS.attr('number'),
  LONG: DS.attr('number')
});
