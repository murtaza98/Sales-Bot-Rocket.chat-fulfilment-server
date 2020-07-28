const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
const port = 4000;

app.post( "/", ( req, res, next ) => {
    console.log(req.body);

    switch(req.body.queryResult.intent.displayName) {
        case 'Default Welcome Intent':
            console.log('Default Welcome Intent');
            break;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send( "[]" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
