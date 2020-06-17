(function () {
    var myheaders = {
        'Accept': 'application/json'
    }
    fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        // body: JSON.stringify(''),
        headers: myheaders
      }).then(response => response.json()).then(responseJson => {
        document.querySelector("#dadjoke-text").textContent = responseJson.joke
      }).catch(err => {
          alert('Unknown error ' + String(err));
      });
}());
