
const axios = require("axios");

let res1 ,res2,res3,res4;
async function makeRequest() {
  // Configure request
  const config1 = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/239", // API link
  };
  const config2 = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/25", // API link
  };
  const config3 = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/400", // API link
  };
  const config4 = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/700", // API link
  };

const path = require("path");
const express = require("express");
const app = express();

  res1 = await axios(config1);
  res2 = await axios(config2);
  res3 = await axios(config3);
  res4 = await axios(config4);

  app.set("view engine","ejs");
  app.set('views',path.join(__dirname,'/pages'));
  app.use( express.static( "public" ) );

  app.get("/", (req, res) => {
        res.render("home",{
          title: "Pokemon",
          firstPokeName:res1.data.name,
          firstPokeOrder:res1.data.order,
          secPokeName:res2.data.name,
          secPokeOrder:res2.data.order,
          thirdPokeName:res3.data.name,
          thirdPokeOrder:res3.data.order,
          fourthPokeName:res4.data.name,
          fourthPokeOrder:res4.data.order,
        });
  });
app.listen(3000)
}
makeRequest();
