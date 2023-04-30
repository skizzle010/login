const User = require("../models/user");


exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res, next) => {
  const {email,password} = req.body;
    if(!email || !password ){
      res.status(400).json({success:false,error:"please provide email and password"})
    }
  try {
    const user = await User.findOne({email}).select("+password");
    if (!user){
      res.status(404).json({success:false,error:"Invalid credentials"})
    } 

    const isMatch= await user.matchPassword(password);

    if(!isMatch){
      res.status(404).json({success:false,error:"Invalid credentials"})
    }
    res.status(200).json({
      success:true,
      token: "jeHJogjpa",
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotpassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
