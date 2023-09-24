function receivesAFunction(cb){
    return cb()
}
receivesAFunction(function(){return "Mission Accomplished"})

function returnsANamedFunction(){
    return function myNamedFunction(){
        return "Mission Accomplished"
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Mission Accomplished"
    }
}