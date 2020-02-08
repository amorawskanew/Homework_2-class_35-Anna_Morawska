fetch("https://swapi.co/api/people/1")
  .then(response => {
    console.log("response", response);
    return response;
  })
  .then(result => result.json())
  .then(data=>{
    
  });
