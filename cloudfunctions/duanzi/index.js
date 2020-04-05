'use strict';
const axios =require('axios')
const httpURL='https://api.apiopen.top/getJoke'
// const options1={
//   page:1,
//   count:10,
//   type:'text'
// }
// const options2={
//   page:1,
//   count:10,
//   type:'image'
// }
// const options3={
//   page:1,
//   count:10,
//   type:'video'
// }

exports.main = async (event, context) => {
  const res=await axios.get(httpURL,{params:event})
  return res.data
};