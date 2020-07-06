import axios from 'axios';


//Я экспортирую адрес api,для того чтобы через параметры отправленные из './actions/index' отпралять запросы и получать данные
export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'ваш ключ',
  },
});
