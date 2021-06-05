import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import API_KEY from './secrets.js';
import questionRoutes from './routes/questions.js';

const app = express();
const CONNECTION_URL = API_KEY;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', questionRoutes);

app.get('/', (req,res) =>{res.send("Hello From The Homepage")});

 app.use(express.urlencoded({limit: "30mb", extended: true}));
 app.use(cors());


mongoose.connect(CONNECTION_URL, {
     useNewUrlParser: true, useUnifiedTopology: true
 })
 .then(() => {  
    app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
    })
 .catch((error) =>  console.log(error.message));

 mongoose.set('useFindAndModify', false);