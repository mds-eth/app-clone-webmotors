import axios from 'axios';

export const baseURL = axios.create({
   baseURL: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/',
   timeout: 5000,
});
