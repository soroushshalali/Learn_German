import Realm from 'realm';

class AppController {
    constructor(counter_words, field) {
        this.words_counter = counter_words;
        this.table_name = 'test_app_table';
        this.field = field
        let realm = new Realm({
            schema: [{
                name: this.table_name,
                primaryKey: 'id',
                properties:
                {
                    id: { type: 'int', default: 0 },
                    app_start: 'int',
                    words_counter: 'int',
                }
            }]
        });
    }
    add() {
        try {
            let realm = new Realm();
            realm.write(() => {
                var ID = realm.objects(this.table_name).length + 1;
                realm.create(this.table_name, {
                    id: ID,
                    words_counter: this.counter_Words,
                });
            });
            return true;
        } catch (error) {
            return false;
        }
    }


    words_increse() {
        try {
            let realm = new Realm();
            let filteredObject = realm.objects(this.table_name).filtered("id = '1'");
            realm.write(() => {
                filteredObject[0].words_counter = filteredObject.words_counter + 1;
                console.log('words_counter=' + filteredObject[0].words_counter);
            });

        } catch (error) {
            console.log(error)
        }
    }
}

export { AppController };