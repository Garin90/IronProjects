const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => console.info(`Succesfully connect to the database ${MONGODB_URI}`))
    .catch((error) => console.error(`An error occurred during DB connection: ${error}`));
