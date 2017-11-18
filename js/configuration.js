var MovieTickets = {};

//try
//{
//    xhr = new window.XMLHttpRequest(); //创建XML HttpRequest对象
//    //_xhr.setRequestHeader("Origin", '*');
//}
//catch (ex)
//{
//    try
//    {
//        xhr = new ActiveXObject('Msxml2.XMLHTTP'); //低版本兼容
//        //_xhr.setRequestHeader("Origin", '*');
//    }
//    catch (ex)
//    {

//    }
//};

MovieTickets.configuration = (function () {
    //var serviceUrl = "http://172.28.0.50:82/api/";
    var serviceUrl = "http://180.166.253.196:84/api/";
    
    return {
        serviceUrl: serviceUrl,
        accountUrl: serviceUrl + "Account/",
        reportUrl: serviceUrl + "Report/PieCharts/"
    }
})();