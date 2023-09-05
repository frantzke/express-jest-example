const newman = require('newman');
require('dotenv').config();
const accessKey = process.env.POSTMAN_ACCESS_KEY;
const collectionLink = `https://api.postman.com/collections/21506003-9ddc52f7-44ac-4bb4-9e9b-87bcf1cb43f4?access_key=${accessKey}`;
// const envString = `https://api.getpostman.com/environments/${envUid}?apikey=${apiKey}`
newman.run(
  {
    collection: collectionLink,
    reporters: 'cli',
    // environment: envString
  },
  (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log('all tests passed');
  }
);
