function showtime()
{
var today,hour,second,minute,year,month,date;
var strDate ;
today=new Date();
var n_day = today.getDay();
switch (n_day)
{
    case 0:{
      strDate = "星期日"
    }break;
    case 1:{
      strDate = "星期一"
    }break;
    case 2:{
      strDate ="星期二"
    }break;
    case 3:{
      strDate = "星期三"
    }break;
    case 4:{
      strDate = "星期四"
    }break;
    case 5:{
      strDate = "星期五"
    }break;
    case 6:{
      strDate = "星期六"
    }break;
    case 7:{
      strDate = "星期日"
    }break;
}
year = today.getFullYear();
month = today.getMonth()+1;
date = today.getDate();
hour = today.getHours();
minute =today.getMinutes();
second = today.getSeconds();
document.getElementById('time').innerHTML = year + "年" + month + "月" + date + "日" + strDate +" " + hour + ":" + minute + ":" + second; //显示时间
setTimeout("showtime();", 1000); //设定函数自动执行时间为 1000 ms(1 s)
}