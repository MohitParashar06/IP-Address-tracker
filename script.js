let map = L.map('map').setView([0, 0], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let btn = document.getElementById('btn');

btn.addEventListener('click',(e) => {
    let val = document.getElementById('ip').value;
    let ip = document.getElementById('ip_value');
    let location = document.getElementById('location_value');
    let timezone = document.getElementById('time_value');
    let isp = document.getElementById('isp_value');
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_3W7mDTYmgH4XWHKmwXmTr3M8tsM8p&ipAddress=${val}`)
.then((response) =>{
    return response.json();
}).then((data) => {
    if(data.location.city === ""){
        return alert('Enter valid IP Address');
    }
    ip.innerHTML = data.ip;
    location.innerHTML= data.location.city + "," +data.location.region;
    timezone.innerHTML = data.location.timezone;
    isp.innerHTML = data.isp;
    let lat = data.location.lat;
    let lng = data.location.lng;
    getLocation(lat,lng);
   
}).catch((e)=>{
    alert("Error occured: "+e);
})
})

const getLocation = (lat,lng) =>{
    map.panTo([lat, lng]);
}

