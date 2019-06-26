function getDay(dt) {
    // var dt=new Date();
    var nian=dt.getFullYear();     //获取年
    var yue=dt.getMonth();
    var ri=dt.getDay();
    var shi=dt.getHours();
    var fen=dt.getMinutes();
    var miao=dt.getSeconds();       //获取秒
    yue=yue<10?"0"+yue:yue;         //三目逻辑运算给yue赋值
    shi=shi<10?"0"+shi:shi;
    fen=fen<10?"0"+fen:fen;
    miao=miao<10?"0"+miao:miao;
    var content=nian+"年"+yue+"月"+ri+"日"+shi+"时"+fen+"分"+miao+"秒"
    return content;

}
