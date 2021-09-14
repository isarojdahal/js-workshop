const weather = true;

const date = new Promise(function (resolve, reject) {
  if (weather) {
    const dateDetails = {
      name: "ABC Restaurant",
      location: "55th Street",
      table: 5,
    };

    resolve(dateDetails);
  } else {
    reject(new Error("Bad weather, so no Date"));
  }
});

date
  .then(function (data) {
    // the content from the resolve() is here
    return data.name;
  })
  .then((dataName) => console.log(dataName))
  .catch(function (error) {
    // the info from the reject() is here
  });
