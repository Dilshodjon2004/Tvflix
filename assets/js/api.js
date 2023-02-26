"use strict";

const api_key = "67fde1832476ea5fd99fccd5c781d724";
const imageBaseURL = "http://image.tmdb.org/t/p/";

/* 
  fetch data from a server using the 'url' and passes the result in JSON data to a 'callback' function,
  along with an optional parametr if has 'optionalParam'
*/

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data)=>callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
