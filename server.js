const express = require('express');
const axios = require('axios').default
// const { Client } = require('podcast-api')
const app = express();
const port = 5000;
key = 'd833c3f184974abea2b3f129dcabd7a7'; // ITS A FREE KEY


// ONE METHOD OF FETHCING FROM LISTEN NOTES API


// const client = Client({ apiKey: 'd833c3f184974abea2b3f129dcabd7a7' });
// client.fetchBestPodcasts({
//   genre_id: '93',
//   page: 2,
//   region: 'us',
//   sort: 'listen_score',
//   safe_mode: 0,
// }).then((response) => {
//  let podcasts = response.data.podcasts
//   // console.log(podcasts)

// }).catch((error) => {
//   console.log(error)
// });

// console.log(vardata)
const options = {
	method: 'GET',
	headers: {
		// 'X-ListenAPI-Key': 'd833c3f184974abea2b3f129dcabd7a7'
	}
};


const getPodcast = async() => {
  const response = await axios.get('https://listen-api-test.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0', options)
  console.log(response)
  const podcast = await response.data.podcasts
  console.log(podcast)

  app.get('/', (req, res) => {
    const shows = [{podcast}];
  
    res.json(shows);
  })
  
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

getPodcast()
// let response = axios.get('https://listen-api-test.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0', options)
// .then((res) => {
//   // console.log(res.data)
//   var podcast = res.data.podcasts

//   // BRINGING IN PODCASTS
//   console.log('poddies', podcast)
// }).catch((error) => {
//   console.log(error)
// })

// app.get('/', (req, res) => {
//   const shows = [{podcast}];

//   res.json(shows);
// })

// app.listen(port, () => console.log(`Listening on port ${port}`))


