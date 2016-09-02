import Twitter from 'twitter';
import path from 'path';

const secrets = require(path.join(__dirname, '..', 'secrets.json'));

const client = new Twitter({
  consumer_key: secrets.CONSUMER.KEY,
  consumer_secret: secrets.CONSUMER.SECRET,
  access_token_key: secrets.ACCESS.TOKEN,
  access_token_secret: secrets.ACCESS.SECRET,
});

const stream = client.stream('statuses/filter', { track: 'dog, coffee' });

stream.on('data', event => { // eslint-disable-line
  // TODO: Do Something
});

export default client;

