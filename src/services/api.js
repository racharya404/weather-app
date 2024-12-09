import axios from 'axios';

const API_KEY = 'e57a89a90b6c4693054cfb42d1eb975f';
//https://api.openweathermap.org/data/2.5/weather?q=Ozark&appid=05af56cf3ac73cc7fe024a774395e9f8
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.log('Error while calling the api ', error.message);
    return error.response;
  }
};
