const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        default:0.0
    }, 
    images:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:true,
        enum: {
            values:['Vegetables','Fruits']
        }
        
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:mongoose.Schema.Types.ObjectId,
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('Product', productSchema);