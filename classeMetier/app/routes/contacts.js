import Route from '@ember/routing/route';
import EmberObject from "@ember/object";

let Contacts=EmberObject.extend({
    datas:null,
    contacts:computed('datas.@each.isdeleted', function(){
        return this.datas.filter((item)=>!item.get('isDeleted'))
    })
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
