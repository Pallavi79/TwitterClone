const test = async(req,res)=>{
    try {
        res.status(200).json({
            "message":"Test controller is working"
        })
    } catch (error) {
        throw error;
    }
}
module.exports=test;