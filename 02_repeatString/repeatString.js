const repeatString = function(text,i) {

    let string ='';

    if(i<0){
        string = 'ERROR'
    }

    for(let x=0;x<i;x++){
        string=string+text;
    }
    return string;
};

//repeatString('hey',1);

// Do not edit below this line
module.exports = repeatString;
