
let request = require('request');
let express = require('express');
let app = express();
let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


 /*
 --------------------------------Funcion para Mew---------------------------------
 */
let Mew = new Promise((resolve, reject)=>{
  request('https://pokeapi.co/api/v2/pokemon/151', (error, response, body)=>{
    if (error) {
      reject(error);
    }
        
    resolve(body);
  });
})

app.get("/PokeMew/name", (request, response)=>{
  
  Mew.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeMew/image", (request, response)=>{
  
  Mew.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeMew/movimientos", (request, response)=>{
  Mew.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})



/* 
----------------------------Funcion para Pikachu-------------------------------
*/

let Pikachu = new Promise((resolve, reject)=>{
  request('https://pokeapi.co/api/v2/pokemon/25', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})


app.get("/PokePikachu/image", (request, response)=>{
  
  Pikachuimage.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny_female;   
    
    response.status(500).json(image);
    
          
  }).catch((error)=>{
    console.log(error);
  })   
	
});













app.listen(3002, ()=>{

	console.log("Mi servidor");
});