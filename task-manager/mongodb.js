const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to database')

    const db = client.db(databaseName)    
    // db.collection('users').insertOne({ _id: id, name: 'Michael Scott', age: 45 }, (err, res) => {
    //     if (err)
    //         return console.log('Unable to insert user')
        
    // })

    db.collection('users').findOne({name: 'Michael Scott'}, (err, res) => {
        if (err)
            return console.log('Unable to find user')
        console.log(res)
    })
    db.collection('users').find({age: 23}).toArray((err, res) => {
        if (err)
            return console.log('Unable to find users')
        console.log(res)
    })
    // db.collection('users').updateOne({
    //     _id: ObjectId('5cce32eac7dcb100ec10e556')
    // },{
    //     $set: {
    //         name: 'Michael G Scott'
    //     },
    //     $inc: {
    //         age: 3
    //     }
    // }).then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err)
    // })
    db.collection('users').updateMany({
        age: 23
    }, {
        $inc: {
            age: 1
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

    db.collection('users').deleteOne({age:25})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})

