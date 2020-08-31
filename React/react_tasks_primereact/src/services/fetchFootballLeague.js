import axios from 'axios';

export function getTeams() {
  return axios.get('assets/data/football.json')
    .then(res => res.data.data)
    .then(data => {
      return data;
    });
}
