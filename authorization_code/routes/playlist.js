const express = require('express');
const router = express.Router();
var request = require('request');

//displays user's playlist
router.get('/',function(req,res){
     //USE COOKIES!
     var access_token = req.cookies.token;
     console.log(access_token);
     var options = {
       url : 'https://api.spotify.com/v1/me/playlists',
       headers : { 'Authorization': 'Bearer ' + access_token},
       json: true
     };
     request.get(options,function(error,response,body){
       console.log(body);
       res.json({
           devices: body
       })
     })
})


module.exports = router;