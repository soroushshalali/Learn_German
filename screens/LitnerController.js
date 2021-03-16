import Realm from 'realm';

class LitnerController {

    constructor(id, word, meaning, more, status, timestamp, userFlag) {
        this.id = id;
        this.word = word;
        this.meaning = meaning;
        this.more = more;
        this.status = status;
        this.timestamp = timestamp;
        this.table_name = 'tableTest4';
        this.userFlag = userFlag;
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
    // let ID = realm.objects(this.table_name).length + 1;

    add_word() {
        try {
            let realm = new Realm();
            realm.write(() => {
                var All_Words = realm.objects(this.table_name);
                let ID = 1;
                if (All_Words.length > 0) {
                    ID = All_Words[All_Words.length - 1].id + 1;
                }

                realm.create(this.table_name, {
                    id: ID,
                    word: this.word,
                    meaning: this.meaning,
                    more: this.more,
                    status: 0,
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
        if (this.id) {
            let filteredObject = realm.objects(this.table_name).filtered("id =" + this.id);
            return filteredObject[0];
        }
        if (this.status == -1) {
            let filteredObjects = realm.objects(this.table_name).filtered("timestamp < " + Date.now());
            return filteredObjects;
        }
        var All_Words = realm.objects(this.table_name);
        for (const x of All_Words) {
            console.log('TimeStamp: ' + Date.now())
            console.log(x.word + '---' + x.id);

        }
        return All_Words;
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

    change_status() {
        let realm = new Realm();
        let st = 0;
        let nextTime = 0;
        let oneDay = 86400000;
        // let oneDay = 30000;
        let now = Date.now();
        let filteredObject = realm.objects(this.table_name).filtered("id =" + this.id);
        if (this.userFlag) {

            st = filteredObject[0].status + 1;
            switch (filteredObject[0].status) {
                case 0:
                    nextTime = now + oneDay;
                    break;
                case 1:
                    nextTime = now + oneDay;
                    break;
                case 2:
                    nextTime = now + (oneDay * 2);
                    break;
                case 3:
                    nextTime = now + (oneDay * 4);
                    break;
                case 4:
                    nextTime = now + (oneDay * 8);
                    break;
                case 5:
                    nextTime = now + (oneDay * 16);
                    break;
            }
        } else {
            st = 1;
            nextTime = now;
        }
        realm.write(() => {
            filteredObject[0].status = st;
            filteredObject[0].timestamp = nextTime;
        });
    }

    update() {
        try {
            let realm = new Realm();
            let filteredObject = realm.objects(this.table_name).filtered("id =" + this.id);
            realm.write(() => {
                filteredObject[0].word = this.word;
                filteredObject[0].meaning = this.meaning;
                filteredObject[0].more = this.more;
            });
            return true;

        } catch (error) {
            console.log(error)
        }
    }

}

export { LitnerController };