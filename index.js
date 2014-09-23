var esprima = require("esprima");



var esprimaOptions = {
    tolerant : true,
    loc : true

};

function parse(source){
    var ast;
    try{
        ast = esprima.parse(source,esprimaOptions);
    }
    catch(c){

    }
    return ast;
}


exports.infer = function(source){
    var ast = parse(source);
    if(ast){

    }
};