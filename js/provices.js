const province = {
    id: null,
    name: null,
};
const district = {
    id: null,
    name: null,
};
const ward = {
    id: null,
    name: null,
};
fetch('https://vapi.vnappmob.com/api/province/')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.results.map(province => {
            html += `<li onclick='getProvince(${province.province_id}, "${province.province_name}"); getLocate("${province.name}")' value='${province.province_id}'>${province.province_name}</li>`;
        });
        document.querySelector('.menu-locate').innerHTML = html;
    })
    .catch(error => console.log(error));

const getProvince = (id, name) => {
    province.id = id;
    province.name = name;
    fetch(`https://vapi.vnappmob.com/api/province/district/${id}`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.results.map(district => {
                html += `<li onclick='getDistrict(${district.district_id}, "${district.district_name}"); getLocate2("${district.name}")' value='${district.district_id}'>${district.district_name}</li>`;
            });
            document.querySelector('.menu-locate').innerHTML = html;
        })
        .catch(error => console.log(error));
}

const getDistrict = (id, name) => {
    district.id = id;
    district.name = name;
    fetch(`https://vapi.vnappmob.com/api/province/ward/${id}`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.results.map(ward => {
                html += `<li onclick='getward(${ward.ward_id}, "${ward.ward_name}"); getLocate3("${ward.name}")' value='${ward.ward_id}'>${ward.ward_name}</li>`;
            });
            document.querySelector('.menu-locate').innerHTML = html;
        })
        .catch(error => console.log(error));
}

const getward = (id, name) => {
    ward.id = id;
    ward.name = name;
}

const getLocate = () => {
    const locate = document.querySelector('.exactly-location');
    locate.innerHTML = `Chọn Quận, huyện tại ${province.name}`;
}
const getLocate2 = () => {
    const locate = document.querySelector('.exactly-location');
    locate.innerHTML = `Chọn Phường, xã tại ${district.name} , ${province.name}`;
}
const getLocate3 = () => {
    const Location = document.querySelector('.province');
    const exactlyLocation = document.querySelector('.exactly-location');
    exactlyLocation.innerHTML = `Địa chỉ đã chọn: ${ward.name} , ${district.name} , ${province.name}`;
    Location.innerHTML = `${ward.name} , ${district.name} , ${province.name}`;
    renderLocation();
}

const renderLocation = () => {
    fetch('https://vapi.vnappmob.com/api/province/')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.results.map(province => {
            html += `<li onclick='getProvince(${province.province_id}, "${province.province_name}"); getLocate("${province.name}")' value='${province.province_id}'>${province.province_name}</li>`;
        });
        document.querySelector('.menu-locate').innerHTML = html;
    })
    .catch(error => console.log(error));
};

const searchLocation = () => {
    const valueSearch = document.querySelector('#search-locate').value;
    fetch('https://vapi.vnappmob.com/api/province/')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.results.filter(province => {
            if(province.province_name.toLowerCase().includes(valueSearch.toLowerCase())){
                html += `<li onclick='getProvince(${province.province_id}, "${province.province_name}"); getLocate("${province.name}")' value='${province.province_id}'>${province.province_name}</li>`;
            }
        });
        document.querySelector('.menu-locate').innerHTML = html;
    })
    .catch(error => console.log(error));
}