const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err,req,res,next)=>{
    let error = {...err}

    error.message = err.message 

    if(err.code === 11000 ){
    const message = "Duplicate field Value Enter";} 
}