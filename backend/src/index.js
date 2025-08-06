import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/MernDb').then(()=>{
    console.log('Connected to MongoDB');
    startServer();   

}).catch(err => {
    console.error('Failed to connect to MongoDB', err); 
    process.exit(1);
});

function startServer() {
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}