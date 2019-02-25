module.exports = (str) =>{
    let arr = [];
    let start= null;
    let end = null;
    for (let x = 0;x<=str.length;x++){
        //console.log(start+ ' ' + end);
        //console.log(arr);
        if (str[x]==='#'){
            start = x+1
        }
        if ((str[x] ===' '|| x===str.length) && start !==null){
            end =x;
            arr.push(str.slice(start,end));
            end= null;
            start = null;
        }
    }
    return arr;
};