import React, {useEffect, useState} from 'react';
import axios from "axios";

import base64 from 'base-64';


const Products =async () => {
    // const [popular,setPopular]=useState([])
    //
    // const getPopular=async ()=>{
    //     const url= await axios (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    //     const {data}=await url
    //     await setPopular(data.results)
    // }
    // useEffect(()=>{
    //     getPopular()
    // },[])
    // console.log(popular)

//     const username = 'tilek2@neman.kg';
//     const password = '9LtEpx8c68Nf6A8812nh8R461516jsU4';
//
//
//     let url = 'https://neman.kg/api/products&tilek2@neman.kg&9LtEpx8c68Nf6A8812nh8R461516jsU4';
//
//
//     let headers = new Headers();
//
// //headers.append('Content-Type', 'text/json');
//     headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));
//     headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
//
//     fetch(url, {method:'GET',
//         headers: headers,
//         //credentials: 'user:passwd'
//     })
//         .then(response => response.json())
//         .then(json => console.log(json));
//
//         try {
//             const response = await axios.post('https://neman.kg/api/products&tilek2@neman.kg&9LtEpx8c68Nf6A8812nh8R461516jsU4', {}, {
//                 auth: {
//                     username: username,
//                     password: password
//                 }
//             });
//             // Обработка ответа
//             console.log(response.data);
//         } catch (error) {
//             console.error('Ошибка при выполнении запроса:', error);
//         }

    
//     const [product,setProduct]=useState([])
//
//     let base64 = require('base-64');
//
//     let url = 'http://eu.httpbin.org/basic-auth/user/passwd';
//     let username = 'tilek2@neman.kg';
//     let password = 'passwd';
//
//     let headers = new Headers();
//
// //headers.append('Content-Type', 'text/json');
//     headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));
//     headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
//
//     fetch(url, {method:'GET',
//         headers: headers,
//         //credentials: 'user:passwd'
//     })
//         .then(response => response.json())
//         .then(json => console.log(json));


//     const dispatch = useDispatch();
//     useEffect(()=>{
// axios('https://neman.kg/api/products').then(({data})=>
//     dispatch(getSingleProduct(data))
// )
//         console.log(data.result)
//     },[])


    return (
        <div>
          masl
        </div>
    );
};

export default Products;