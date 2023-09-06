const reverseString = function(userString) {

    let revString = '';
    let charArray = userString.split("");
    //revString = userString.length;

    for(let x=charArray.length-1; x>-1;x--){

        revString=revString+charArray[x]
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
