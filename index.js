import app from './app.js';
import mongoose from 'mongoose';
console.log('Connecting to MongoDB...');
import config from './utils/config.js';
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Starting the server
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB: ', error.message);
  });




