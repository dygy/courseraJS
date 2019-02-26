

const metrics  = ['hours','days','months','minutes'];


let date ;



 date = {
       ans :(num)=> /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/.exec(num),
       hour:date.ans[4],
       min:date.ans[5],
       day:date.ans[3],
       month:date.ans[2],
       year:date.ans[1],
       add: (value,metric) => {
           if (date.checkMetric(metric)) {
               if (metric==='hours'){
                   date.hour = date.hour+value
               }
               if (metric==='days'){
                   date.day = date.day+value
               }
               if (metric==='month'){
                   date.month = date.month+value
               }
               if (metric==='minutes'){
                   date.min = date.min+value
               }
               if (metric==='years'){
                   date.year = date.year+value
               }
               date.setDate();
           }
       },
       subtract:(value,metric)  =>{
           if (date.checkMetric(metric)){
               if (metric==='hours'){
                   date.hour = date.hour-value
               }
               if (metric==='days'){
                   date.day = date.day-value
               }
               if (metric==='month'){
                   date.month = date.month-value
               }
               if (metric==='minutes'){
                   date.min = date.min-value
               }
               if (metric==='years'){
                   date.year = date.year-value
               }
               date.setDate();
           }
           },
     checkMetric:(metric)=> {
         for (let x = 0;x<metrics.length ;x++){
             if (metric === metrics[x]){
                 return true;
             }
         }
         return false;
     },
     setDate:()=>{
         date.value=new Date(date.year, date.month, date.day, date.hour, date.min);
     },
       value:0

   };

module.exports=date;