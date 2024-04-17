const baseURL= 'http://127.0.0.1:8000/api';
const ControlbaseURL= '';

export const environment ={
production: false,

  queueGameURL: `${baseURL}/game/queue`,
  joinRandomGameURL: `${baseURL}/game/join/random`,
  endGameURL: `${baseURL}/game/end`,
  dequeueGameURL: `${baseURL}/game/dequeue`,
  cancelRandomQueueURL: `${baseURL}/game/cancel/random`,
  loginURL: `${baseURL}/user/login`,
  logoutURL: `${baseURL}/user/logout`,

  pusher: {
    key: '6f9207431644381a1fb9',
    cluster: 'us2',
  },

}
