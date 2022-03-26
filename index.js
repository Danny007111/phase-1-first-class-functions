function receivesAFunction(callback){
    return callback();
};

function returnsANamedFunction() { 
    return function named(name){
        return "Hello " + name;
      }; 
};

function returnsAnAnonymousFunction(){
    return function() {
        console.log("AnonymousF");
      }
}

  