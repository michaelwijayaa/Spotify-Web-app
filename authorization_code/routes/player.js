const express = require('express');
const router = express.Router();
var request = require('request');

//Get Devices
router.get('/devices',function(req,res){
    //USE COOKIES!
    var access_token = req.cookies.token;
    console.log(access_token);
    var options = {
      url : 'https://api.spotify.com/v1/me/player/devices',
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

//Get currently playing song
router.get('/nowplaying', function(req,res){
    //USE COOKIES!
    var access_token = req.cookies.token;
    console.log(access_token);
    var options = {
      url : 'https://api.spotify.com/v1/me/player/currently-playing',
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

//Get recently played songs
router.get('/recent', function(req,res){
    //USE COOKIES!
    var access_token = req.cookies.token;
    console.log(access_token);
    var options = {
      url : 'https://api.spotify.com/v1/me/player/recently-played',
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