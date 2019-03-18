import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {copy: {}};
    },
    actions:{
        save(model){
            let copy=model.copy;
            let dev=this.setProperties.createRecord('developer', EmberObject.create(copy));
            dev.save();
        }
    }
});
