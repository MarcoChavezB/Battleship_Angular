const baseURL = 'http://localhost:8000/api';

export const environment = {
  production: false,
  queueGameURL: `${baseURL}/game/queue`,
  joinRandomGameURL: `${baseURL}/game/join/random`,
  endGameURL: `${baseURL}/game/end`,
  dequeueGameURL:`${baseURL}/game/dequeue`,
  cancelRandomQueueURL: `${baseURL}/game/cancel/random`,
  loginURL: `${baseURL}/user/login`,
  logoutURL: `${baseURL}/user/logout`,
  authenticateURL : `${baseURL}/authenticatetoken`,
  registerURL: `${baseURL}/user/register`,


  pusher: {
    key: '6f9207431644381a1fb9',
    cluster: 'us2',
  },
}
