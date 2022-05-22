const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const ejs = require('ejs')
const authRouter = require("./routers/authRouter")
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// const PORT = 3000
const url = "mongodb+srv://maulerr:Aitu2021!@backend.koyk6.mongodb.net/backend?retryWrites=true&w=majority";


app.set("view engine", "ejs")
app.use('/static', express.static('static'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use(express.json())

let port = process.env.PORT
if (port == null || port === "") {
    port = 3000;
}

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

try {
    mongoose.connect(url);

    // app.use('/auth', authRouter);
    app.use("/", require("./routers/index"))
    app.use("/", require("./routers/about"))
    app.use("/", require("./routers/workpage"))
    app.use("/", require("./routers/login"))
    app.use("/", require("./routers/reg"))
    app.use("/", require("./routers/adminRouter"))
    // app.use("/", require("./routers/workouts"))

    app.listen(port, () => {
        console.log(`App was launched on ${port} PORT`)
    })
} catch (e) {
    console.log("Something went wrong!" +
        "" + e)
}

