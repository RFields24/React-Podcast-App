import React from 'react'
function Login() {

  const CLIENT_ID = "531c2380ac8a48ee97e8d9c0f25b7b4f"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  // const [token, setToken] = useState('')

  // useEffect(() => {
  //   const hash = window.location.hash

  //   let token = window.localStorage.getItem('token')

  //   if(!token && hash){
  //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

  //     console.log(token)
  //   }


  // }, [])


  return (
    <div>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    </div>
  )
}

export default Login