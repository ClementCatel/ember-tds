import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {nom:"CATEL", details:"Détails du client ..."};
    }
});
