   // Exporting 
   exports.getDate= function(){
    const today = new Date();

// Option for date format
  const options = {
      weekday: 'long',
      day: "numeric",
      month:"long"
  }

  return  day = today.toLocaleDateString("en-US",options)
 }
//  
//  module.exports.getDay = getDay;

//  function getDay(){
//   const today = new Date();
  
//   // Option for date format
//     const options = {
//         weekday: 'long',
//     }
  
//     const day = today.toLocaleDateString("en-US",options)
  
//     return day;
//    }
  
//    console.log(module.exports)