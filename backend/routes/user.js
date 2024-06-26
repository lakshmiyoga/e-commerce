const express =require('express');
const { userRegister,userLogin, logoutUser,requestPasswordReset, resetPassword, getUserProfile, updateUserProfile, changePassword} = require('../controllers/userController');
const router = express.Router();
const {isAuthenticateUser, authorizeRoles} = require("../middleware/authmiddleware")
const multer = require('multer');
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(  __dirname,'..' , 'uploads/user' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })


router.post('/register',upload.single('avatar'),userRegister);
router.post('/login', userLogin);
router.get('/logout', logoutUser);
router.post('/password/forgot', requestPasswordReset);
router.post('/password/reset/:token', resetPassword);
router.put('/password/change',isAuthenticateUser, changePassword);
router.get('/myProfile', isAuthenticateUser, getUserProfile);
router.put('/update', isAuthenticateUser,upload.single('avatar'), updateUserProfile);





module.exports=router;