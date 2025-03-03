import User from '../models/user.models.js'

const registerUser = async function (req,res) {
    try{
        const {userName,email,password} = req.body
        
      

        const newUser = new User({
            userName,
            email,
            password
        })

        await newUser.save()
        res.status(201).json({msg:'user created',user:newUser})
    
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const findUser = async function (req,res) {
    try{
        const usertobefound = await User.find()
        res.status(200).json({user:usertobefound})
    }
    catch(err){
        console.error(err)
    }
}


export {registerUser,findUser} 