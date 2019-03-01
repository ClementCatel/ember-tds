import Route from '@ember/routing/route';
import EmberObject from "@ember/object";

let Contacts=EmberObject.extend({
    datas:null
});

export default Route.extend({
    model(){
        return Contacts.create({
            datas: this.store.findAll('contact')
        });
    },
    actions: {
        delete(contact) {
            contact.deleteRecord();
        }
    }
});
