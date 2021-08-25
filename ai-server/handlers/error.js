function errorHandler(error,req,res,next)
{
   
    
    return res.status(error.status || 500).send({
            error:{
                message:error.message || "oops something went wrong"
            }
    })
}

module.exports   =    errorHandler;