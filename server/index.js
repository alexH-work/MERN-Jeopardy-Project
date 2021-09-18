import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import questionRoutes from './routes/questions.js';
import dotenv  from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req,res) =>{res.send("Working")});
app.use('/api', questionRoutes);


mongoose.connect(process.env.MONGODB_URI, {
   useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {  
  app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
  })
.catch((error) =>  console.log(error.message));

mongoose.set('useFindAndModify', false);