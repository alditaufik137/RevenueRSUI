var router = require('express').Router();
var tokenManager = require('tokenmanager');
tokenManager.configure( {
 "decodedTokenFieldName":"UserToken",
 "authorizationMicroserviceUrl":"http://localhost:3000",
 "authorizationMicroserviceToken":"4343243v3kjh3k4g3j4hk3g43hjk4g3jh41h34g3",
 "exampleUrl":"http://miosito.it",
 "tokenFieldName":"access_token",
 "secret":"secretKey"
});

router.get('/resource', tokenManager.checkAuthorizationOnReq, function(req,res){
    // if you are in here the token might not be valid or authorized
    if (req.UserToken.valid) {
        //here token is valid
    }
    else {
        //here token is not valid
    }
    console.log("Decoded TOKEN:" + req.UserToken); // print the decode results
});

