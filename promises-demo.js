//Producer - return promise object
const calculate = (value) => {
  return new Promise((resolve, reject) => {
    //resolve - success
    //reject - error
    if (value) resolve(value + 2); //resolve is returning some data
    else reject("Data is undefined");
  });
};
//Method I
// calculate()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
//if resolve it will execute .then callback
//if reject it will execute .catch call back

//Method II
const asyncfunc=async ()=>{//call producer function asynchronously
    try{
    const data=await calculate();//await for the data
    console.log(data)
    }catch(error){
        console.log(error)
    }
}
asyncfunc()