
let request = require('request');
let express = require('express');
let app = express();
let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


 /* 1
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



/*  2
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



app.get("/PokePikachu/name", (request, response)=>{
  
  Pikachu.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokePikachu/image", (request, response)=>{
  
  Pikachu.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokePikachu/movimientos", (request, response)=>{
  Pikachu.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})


/*  3
-------------------------Funcion para Jigglypuf------------------------------------
*/

let Jigglypuff = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/39', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeJiggly/name", (request, response)=>{
  
  Jigglypuff.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeJiggly/image", (request, response)=>{
  
  Jigglypuff.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeJiggly/movimientos", (request, response)=>{
  Jigglypuff.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/*  4
---------------------Funcion para Charizard---------------------
*/

let Charizard = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/6', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeCharizard/name", (request, response)=>{
  
  Charizard.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeCharizard/image", (request, response)=>{
  
  Charizard.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeCharizard/movimientos", (request, response)=>{
  Charizard.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/*  5
----------------------------------FUncion para Latias-------------------------
*/

let Latias = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/380', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeLatias/name", (request, response)=>{
  
  Latias.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeLatias/image", (request, response)=>{
  
  Latias.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeLatias/movimientos", (request, response)=>{
  Latias.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/*  6
----------------------------Funcion para Bulbasaur---------------------
*/

let Bulbasaur = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/1', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeBulbasaur/name", (request, response)=>{
  
  Bulbasaur.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeBulbasaur/image", (request, response)=>{
  
  Bulbasaur.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeBulbasaur/movimientos", (request, response)=>{
    Bulbasaur.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/*  7
-----------------------------FUncion para Charmander---------------------
*/

let Charmander = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/4', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeCharmander/name", (request, response)=>{
  
  Charmander.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeCharmander/image", (request, response)=>{
  
  Charmander.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeCharmander/movimientos", (request, response)=>{
  Charmander.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/*  8
----------------------------FUncion de Psyduck--------------------
 */

let Psyduck = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/54', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokePsyduck/name", (request, response)=>{
  
  Psyduck.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokePsyduck/image", (request, response)=>{
  
  Psyduck.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokePsyduck/movimientos", (request, response)=>{
  Psyduck.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/* 9  
------------------------------------Funcion de Gengar----------------------
*/

let Gengar = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/94', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeGengar/name", (request, response)=>{
  
  Gengar.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeGengar/image", (request, response)=>{
  
  Gengar.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeGengar/movimientos", (request, response)=>{
  Gengar.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

/*  10 
-------------------------Funcion de Ditto---------------------
*/
let Ditto = new Promise((resolve, reject)=>{
  
  request('https://pokeapi.co/api/v2/pokemon/132', (error, response, body)=>{
      if (error) {
          reject(error);
      }

      resolve(body);
  });
})

app.get("/PokeDitto/name", (request, response)=>{
  
  Ditto.then((nombre)=>{
    let responseObject = JSON.parse(nombre);
    let name = responseObject.name;
        
    response.status(500).json(name);
    
  }).catch((error)=>{
    console.log(error);
  })   
	
});

app.get("/PokeDitto/image", (request, response)=>{
  
  Ditto.then((imagen)=>{
    let responseObject = JSON.parse(imagen);
    let image = responseObject.sprites.front_shiny;   
    response.status(500).json(image);   

  }).catch((error)=>{
    console.log(error);
  })
	
});

app.get("/PokeDitto/movimientos", (request, response)=>{
  Ditto.then((movimiento)=>{
    let responseObject = JSON.parse(movimiento);
    let move= [ responseObject.moves[0].move.name, responseObject.moves[1].move.name, responseObject.moves[2].move.name];
    response.status(500).json(move);
    
  }).catch((error)=>{
    console.log(error);
    
  })
})

app.listen(3002, ()=>{

	console.log("Mi servidor");
});