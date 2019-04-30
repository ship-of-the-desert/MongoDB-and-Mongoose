const mongoose = require('mongoose');
const Schema = mongoose.Schema



const companySchema = new Schema( 
    {
    name= {type: String, required: true},
    logo= {type:String, required: false},
    adress= {type:String, required: false},
    telephone= {type : Number, require: false}
   },
   
  { 
    driverName:{type: String, required: true},
   age: {type: Number},
   image: {type: URL} 
    },
  
      cars=[
          car = {type: String, required: true},
      model ={type: String, required: false},
      name={type: String, required: true},
      image ={type: String, required: true},
      {timestamps: true}
  ])

const Company = mongoose.model('Company', companySchema)
module.exports = Company 

