import {reactive} from 'vue'
export const store = reactive ({
    cardList:[],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=bc9d00f7dce5f741a8f06adada3b3852',
    titolo: 'BoolFlix',
});