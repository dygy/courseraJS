module.exports = (str) =>{
    let arr = [];
    let toPush= true;

  //  arr.splice(arr.length-1);
    for (let x = 0;x<str.length;x++){

        for (let y=0;y<arr.length;y++){

            if (str[x].toLowerCase() === arr[y].toLowerCase()){
                toPush = false;
            }
        }
        if (toPush=== true){
            arr.push(str[x].toLowerCase());

        }
        toPush=true

    }
    return arr.join(', ');
};