import app from 'firebase/app'

// This stores data into an .env file.  See page 15 for still more ways to import these variables, specifically as relates to dev v. production.

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

class Firebase {
    constructor() {
        //pull them variables in!
        app.initializeApp(config)
    }
}

export default Firebase;