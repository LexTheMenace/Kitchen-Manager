import axios from 'axios';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const API_KEY = '';

export const fetchMeals = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            c: query   
        }
    });
    return data;
}