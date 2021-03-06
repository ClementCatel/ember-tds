import Route from '@ember/routing/route';
import EmberObject from '@ember/object'

export default Route.extend({
    templateName: 'developers/new',
    afterModel(model) {
        model=EmberObject.create({copy:JSON.stringify(model)});
        return model;
    }
});
