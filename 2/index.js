module.exports = (a,b)=> {
return Number(a) <= 23 && Number(a) >= 0 && ((Number(b) >= 0 && Number(b) <= 59) || b === '00');
};
