const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const User = require('./models/User')
const Role = require('./models/Role')


const url = "mongodb+srv://maulerr:Aitu2021!@backend.koyk6.mongodb.net//backend?retryWrites=true&w=majority";

mongoose.connect(url);

const userRole = new Role()
const adminRole = new Role({value: "ADMIN"})
await userRole.save();
await adminRole.save();


const client = new MongoClient(url)

const start = async () => {
    try {
        await client.connect();
        console.log("Cоединение установлено");

        const users = await client.db().collection("users");
        // await users.insertMany([{name: "Rama", age: 18}
        //     , {name: "Sanya", age: 42}
        //     , {name: "Ichigo", age: 15, bankai: "xz"}
        //     , {name: "Domi", age: 10}
        // ]);
        await users.insertOne({
            name: "Yeldar",
            age: 53,
            breed: "mongol"
        });
        // console.log(await users.findOne({age:18}));
    } catch (e) {
        console.log(e);
    }
}

start();