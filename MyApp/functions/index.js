const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.region('asia-northeast1').https.onCall((data, context) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return { msg: "Hello " + data.name + " from Firebase!" };
});
