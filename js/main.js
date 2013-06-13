var geo = myIP();

$("#ip").text(geo[2]);
$("#city").text(geo[1]);

function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");
    var ip = [];
    console.log(hostipInfo);
    for (i=0; i < 4; i++) {
        ipAddress = hostipInfo[i].split(":");
        ip.push(ipAddress[1]);
    }

    return ip;
}