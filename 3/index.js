module.exports = (a,b,c)=> {

    let ans;
    let min = b+c;
       newHour();
       getZeros();
       ans = (a+':'+min);
       return ans;
    function newDay() {
        if (a > 23) {
            a=a-24;
        }
    }
    function newHour() {
        while (min >= 60) {
            a+=1;
            newDay();
            min -= 60;
        }
    }
    function getZeros() {
        if (a <10) {
            a = '0'+a
        }
        if (min < 10) {
            min='0'+min
        }
    }


};
