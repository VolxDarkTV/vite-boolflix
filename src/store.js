import {reactive} from 'vue'
export const store = reactive ({
    cardList:[],
    // Ho dato al link /multi al posto di /movie o /tv
    apiURL: 'https://api.themoviedb.org/3/search/multi?api_key=bc9d00f7dce5f741a8f06adada3b3852',
    // apiSeriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=bc9d00f7dce5f741a8f06adada3b3852',
    imgURL: 'https://image.tmdb.org/t/p/w500',
    titolo: 'BoolFlix',
    searchFilm: '',
    apiQuery: 'query',
});