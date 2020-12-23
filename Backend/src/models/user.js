const { unique } = require('jquery');
const mongoose = require('mongoose');

const validator = require('validator');

const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        min:2,
        max:80,
        
        trim : true
    },
    lastname:{
        type:String,
        min:2,
        max:80,
        
        trim : true
    },
    
    email:{
        type: String,

        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid");

            }
        },
       
    },
    contactnumber:{

        type:Number
               }
})
//userschema.virtual('password')
//.set(function(password){
  //  this.hash_password=bcrypt.hashSync(password,10)
//})



//userschema.methods={
  //  authenticate:function(password){
    //    bcrypt.compareSync(password,this.hash_password)
    //}
//}

const Datacollection =new mongoose.model('Datacollection',userschema)
module.exports=Datacollection 