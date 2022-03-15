import React, {useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BASE_URL} from "../../store/auth/login/baseUrl";
import { getUsers } from "../../store/actions";

function Main (){
  // fetch(`${BASE_URL}/getdata`, {  
  // }).then(function(response) {
  //   return response.json();
  // }).then(data => {
  //   console.log(data.data);
  // });

   const dispatch = useDispatch();
   const usersData = useSelector(state  => state.users);
   console.log(usersData);
   

   useEffect(()=>{
     dispatch(getUsers([{
       id:1,
       name:"Manoj Gokina",
       email:"manojgokina@gmail.com",
       password:"Manoj@1234"
     }]))
   })
  return (
    <div>main data</div>
  )
}

export default Main