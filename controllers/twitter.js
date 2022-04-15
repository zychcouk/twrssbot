const axios = require('axios').default;

async function postToTwitter() {
  axios.get('https://hacker-news.firebaseio.com/v0/beststories.json')
    .then((response) => {
      // handle success
      const lastFifty = response.data.slice(Math.max(response.data.length - 50, 0));
      const randomStory = (array) => array[Math.floor(Math.random() * array.length)];

      return randomStory(lastFifty);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then((storyId) => {
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then((response) => {
          console.log(response.data);
        });
    });
}

module.exports = { postToTwitter };
