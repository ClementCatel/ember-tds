import DS from 'ember-data';

export default DS.Model.extend({
    nom:DS.attr(),
    prenom:DS.attr(),
    email:DS.attr(),
});
