import Route from '@ember/routing/route';
import { copyFile } from 'fs';

export default Route.extend({
    model(){
        let src = {};
        Object.assign(this.get('model'));
    },
    templateName:'contacts/add',

    afterModel(model, transition){
        setImmediate(model,'copy',{
            Firstname:get(model,'firstname'),
            Lastname:get(model,'lastname'),
            email:get(model,'email'),
            id:get(model, 'id')
        });
    },
    actions: {
        save(contact) {
            contact.save().then(()=>{
                this.transitionTo('contacts')
            });
        }
    }
});