import Realm from 'realm';

class ClassRealm {

    constructor(id, word, meaning, more, status, timestamp) {
        this.id = id;
        this.word = word;
        this.meaning = meaning;
        this.more = more;
        this.status = status;
        this.timestamp = timestamp;
        this.table_name = 'tableTest4';
        let realm = new Realm({
            schema: [{
                name: this.table_name,
                primaryKey: 'id',
                properties:
                {
                    id: { type: 'int', default: 0 },
                    word: 'string',
                    meaning: 'string',
                    more: 'string',
                    status: 'int',
                    timestamp: 'int',
                }
            }]
        });
    }

    add_word() {
        try {
            let realm = new Realm();
            realm.write(() => {
                var ID = realm.objects(this.table_name).length + 1;
                realm.create(this.table_name, {
                    id: ID,
                    word: this.word,
                    meaning: this.meaning,
                    more: this.more,
                    status: this.status,
                    timestamp: Date.now(),
                });
            });
            return true;
        } catch (error) {
            return false;
        }

    }

    show_records() {
        let realm = new Realm();
        if (this.status == 0) {
            let filteredObjects = realm.objects(this.table_name).filtered("timestamp < " + Date.now());
            return filteredObjects;
        }
        var A = realm.objects(this.table_name);
        console.log(A);
        return A;
    }

    find_obj() {
        let realm = new Realm();
        let filteredObjects = realm.objects(this.table_name).filtered("id =" + this.id);
        return filteredObjects;
    }

    del_all() {
        try {
            let realm = new Realm();
            realm.write(() => {
                realm.deleteAll()
            })
        } catch (err) {
            console.log(err)
        }
    }

    del() {
        try {
            let realm = new Realm();
            let filteredObjects = realm.objects(this.table_name).filtered("id =" + this.id);
            realm.write(() => {
                realm.delete(filteredObjects);
            })
        } catch (error) {
            console.log(error)
        }
    }

    update() {
        try {
            let realm = new Realm();
            let filteredObject = realm.objects(this.table_name).filtered("id =" + this.id);
            realm.write(() => {
                filteredObject[0].status = filteredObject[0].status + 1;
                filteredObject[0].timestamp = 200 + Date.now();
            });

        } catch (error) {
            console.log(error)
        }
    }

}

export { ClassRealm };