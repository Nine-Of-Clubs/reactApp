import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'
// import chatRoutes from './routes/chat.js';
const PORT = process.env.PORT || 5000;

const app = express()

app.use('/posts', postRoutes)
// app.use('/chat', chatRoutes)
app.use(express.json({ limit: '50mb' }));
app.use(cors())
dotenv.config()
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}))
app.use(bodyParser.json({limit: '50mb',extended: true}))

app.get('/', (req, res) => {
  res.send('hello server!');


})
// app.listen(PORT, () =>{
// console.log('listening on port on port '+PORT)

// }) mongodb+srv://chrisocamar522:OrQ3QFkpQPDj01ur@cluster0.x8nwon6.mongodb.net/
// mongodb+srv://chrisocamar522:<password>@cluster0.x8nwon6.mongodb.net/
// ZrFO5kdXfgd0uTWq

const CONNECTION_URL = 'mongodb://localhost:27017/?directConnection=true';


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, (err, res) => {
  console.log('server running on port' + PORT);
}))
.catch((err) => {
  console.log(err.message)
})

// mongoose.set('strictQuery', true);

// app.listen(PORT, (err, res) => {
//   console.log('server running on port' + PORT);
// })  mongodb://localhost:27017/?directConnection=true














