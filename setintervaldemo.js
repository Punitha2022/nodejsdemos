console.log("start");
const intervalId = setInterval(() => {
  console.log("Hello...");
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);//to stop 
  console.log("setInterval callback function is stopped after 4 seconds");
}, 4000);
console.log("end");

