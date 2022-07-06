const express = require('express');
const axios = require('axios').default
// const { Client } = require('podcast-api')  !! GOES ALONG WITH FIRST METHOD OF FETHCING !!
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
//   data = response.data.podcasts
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// });
const options = {
	method: 'GET',
	headers: {
		'X-ListenAPI-Key': 'd833c3f184974abea2b3f129dcabd7a7'
	}
};
let response = axios.get('https://listen-api-test.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0', options)
.then((res) => {
  // console.log(res.data)
  let podcast = res.data

  // BRINGING IN PODCASTS
  console.log(podcast)
}).catch((error) => {
  console.log(error)
})
// console.log(response)

app.get('/', (req, res) => res.json({podcast}))

app.listen(port, () => console.log(`Listening on port ${port}`))


