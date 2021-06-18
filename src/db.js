<script src="//cdn.jsdelivr.net/npm/pouchdb@7.2.1/dist/pouchdb.min.js"></script>




let getDbData = () => {
    var db = new PouchDB('http://pscprime.com:5984/_all_dbs', {
        auth: {
            username: "admin2",
            password: (() => { return "" })()
        }
    });
    let dbs = { type: "container", name: "dbs", content: {} };
    db.get("_all_dbs", (error, result) => {
        console.log(result)
        console.log(error)
        if (error) {
            return
        }

        result.map((r) => {
            dbs.content[r] = { type: "container", name: r, content: {} };
        });
    });
    //get All DBs list

    for (const key in dbs.content) {
        if (Object.hasOwnProperty.call(dbs.content, key)) {
            const element = dbs.content[key];

            db = new PouchDB("http://pscprime.com:5984/" + element, {
                auth: {
                    username: "admin2",
                    password: (() => { return "" })()
                }
            });

            db.get("_all_docs", (error, result) => {

                if (error) {
                    return
                }

                result.rows.map((r) => {
                    dbs.content[element][r.id] = { type: "item", data: r };
                });
            });


        }
    }
    return dbs;
}

//get DB, get docs list


//get Docs


// db.changes({
//     since: 'now',
//     live: true
// }).on('change', (error, result) => {
//     console.log(result)
// });

export default getDbData;
