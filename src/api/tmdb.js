import axios from 'axios';


//Я экспортирую адрес api,для того чтобы через параметры отправленные из './actions/index' отпралять запросы и получать данные
export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5ec32f74a5f40a12ed860e35b7a8e811',
  },
});
