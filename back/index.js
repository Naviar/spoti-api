const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { mongoose } = require('./database');
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));


//routes
app.use('/api', require('./routes/routes'));

app.listen(app.get('port'), () => {
    console.log('server en el puerto:', app.get('port'));
});