const axios = require("axios");
const express = require('express');

const app = express()

setInterval(async () => await callApi(), 1)

function callApi() {
  axios({
    method: "get",
    url: "https://uy72xy9qjk.execute-api.ap-southeast-1.amazonaws.com/api/Course/searchCourse?searchCourse=&pageSize=19&pageNumber=1",
    
  }).then(function (response) {
    //   console.log(response)
  });
}


app.listen(3000, () => console.log('running'))