import React from 'react';
import {BASE_URL} from "../../store/auth/login/baseUrl";

function Main (){
  fetch(`${BASE_URL}/getdata`, {  
  }).then(function(response) {
    return response.json();
  }).then(data => {
    console.log(data.data);
  });
  return (
    <div>main data</div>
  )
}

export default Main