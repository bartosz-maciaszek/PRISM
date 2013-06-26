$.get("http://freegeoip.net/json/", function(data) {
    $("#ip").text(data.ip);
    $("#city").text(data.city+", "+data.country_name);
});