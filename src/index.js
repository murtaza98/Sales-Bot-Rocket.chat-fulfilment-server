const express = require('express');
const bodyParser = require('body-parser');
const { triggerRegistrationEvent } = require('./events');

const app = express();
app.use(bodyParser.json())
const port = 4000;

const incomingEndpointUrlDialogflowApp = '';
const RCServerURL = '';

const emails = [];

app.post( "/", ( req, res, next ) => {
    

    const { body } = req;

    console.log(body);

    const { session, queryResult: { parameters, intent: { displayName } = {} } = {} } = body;

    // extract sessionId
    const splittedText = session.split('/');
    const sessionId = splittedText[splittedText.length - 1];
    if (!sessionId) {
        console.log('Invalid Session Id');
        throw new Error('Invalid Session Id');
    }

    switch(displayName) {
        case 'Welcome.withoutEmail-followup':
            const { email } = parameters;
            console.log('Welcome.withoutEmail-followup', sessionId, email);
            // triggerRegistrationEvent();
            break;
        default:

            break;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send( "[]" );
});



app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
