import axios from 'axios';

export const fetchStore = () => axios.get('https://www.reasonapps.pl/data.json');