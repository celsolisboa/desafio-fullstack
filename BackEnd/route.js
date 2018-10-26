'use strict';
module.exports = function (ctx) {

    // extract context from passed in object
    const db = ctx.db,
        server = ctx.server,
        collection = db.collection('cursos');
    // assign collection to variable for further use
    //  const collection = db.collection('todos');

    /**
     * Create
     */
    server.post('/todos', (req, res, next) => {
        // extract data from body and add timestamps
        const data = Object.assign({}, req.body, {
            created: new Date(),
            updated: new Date()
        })

        // insert one object into todos collection
        collection.insertOne(data)
            .then(doc => res.send(200, doc.ops[0]))
            .catch(err => res.send(500, err))

        next()

    })

    /**
     * Read
     */
    server.get('/todos', (req, res, next) => {

        let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
            skip = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
            query = req.query || {}

        // remove skip and limit from query to avoid false querying
        delete query.skip
        delete query.limit

        // find todos and convert to array (with optional query, skip and limit)
        collection.find(query).skip(skip).limit(limit).toArray()
            .then(docs => res.send(200, docs))
            .catch(err => res.send(500, err))

        next()

    })

    /**
     * Update
     */
    server.put('/todos/:id', (req, res, next) => {

        // extract data from body and add timestamps
        const data = Object.assign({}, req.body, {
            updated: new Date()
        })

        // build out findOneAndUpdate variables to keep things organized
        let query = { _id: req.params.id },
            body = { $set: data },
            opts = {
                returnOriginal: false,
                upsert: true
            }

        // find and update document based on passed in id (via route)
        collection.findOneAndUpdate(query, body, opts)
            .then(doc => res.send(204))
            .catch(err => res.send(500, err))

        next()

    })

    /**
     * Delete
     */
    server.del('/todos/:id', (req, res, next) => {

        // remove one document based on passed in id (via route)
        collection.findOneAndDelete({ _id: req.params.id })
            .then(doc => res.send(204))
            .catch(err => res.send(500, err))

        next()

    })

}