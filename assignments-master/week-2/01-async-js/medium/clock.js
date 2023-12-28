
// function currentTime() {
//     let date = new Date();
    
//     let ampm = date.getHours() >= 12 ? 'PM' : 'AM'
//     let currentTime = `${date.getHours()}::${date.getMinutes()}::${date.getSeconds()} ${ampm} `
//     console.log(currentTime);
// }

// setInterval(currentTime, 1000);

// function sleep(ms) {
//     return new Promise(resolve => {
//       const startTime = Date.now();
//       console.log(startTime);
//       while (Date.now() - startTime < ms) {
//         console.log(Date.now());
//         console.log(ms);
//         // Busy waiting
//       }
//       resolve();
//     });
//   }
  
//   // Example usage
//   console.log('Start');
//   sleep(3000).then(() => {
//     console.log('End after 3000 milliseconds');
//   });
  
// console.log(Date.now);




























// const clock = () => {
//     const time = new Date();
//     const hours = time.getHours();
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds();
  
//     // Add a zero to the front of the number if it is less than 10
//     const paddedHours = `${hours}`.padStart(2, '0');
//     const paddedMinutes = `${minutes}`.padStart(2, '0');
//     const paddedSeconds = `${seconds}`.padStart(2, '0');
  
//     // Display the time
//     console.log(`${paddedHours}:${paddedMinutes}:${paddedSeconds}`);
//   };
  
//   // Call the clock function every second
//   setInterval(clock, 1000);