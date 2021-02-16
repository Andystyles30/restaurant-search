import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer a8cnikqedkXRrWYxnmfRE2q3iu9VucMNYPNbwLzJfev1t5I2n7dHNhnNtWFw9aI2f9RNZarssyOjfTrMD0hguWuqSf1lNqYz7bZSfeUW1dcLffLX37nTQwvwc6UqYHYx'
  }
});
