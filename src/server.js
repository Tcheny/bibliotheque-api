import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import controller from './controller';

mongoose.connect('mongodb://localhost:27017/bibliotheque-api', ()=>{
  console.log('DB initialized');
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/simplonBook', controller);

app.listen(8001, ()=>{
  console.log('Server running on port 8001');
})
