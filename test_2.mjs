import bridge from '@vkontakte/vk-bridge';
import $ from "jquery";



// bridge.send("VKWebAppInit");
//
// bridge.send('VKWebAppGetAuthToken', {
//         "app_id": 8223714,
//         "scope": "friends,status"
//     })
//     .then(data => {
//         console.log(data.access_token);
//     })
//     .catch(error => {
//         console.log(error);
//     });



//https://oauth.vk.com/authorize?client_id=8223714&scope=friends,photos&redirect_uri=&response_type=code&v=5.52
//https://oauth.vk.com/authorize?client_id=8223714&display=page&redirect_uri=&scope=friends,photos&response_type=token&v=5.52

let user_token;
user_token = "123"

getUserInfo()

function getUrl(method, params, user_token){
    if (!method) throw new Error('No method');
    params = params || {};
    params['access_token'] = user_token
    return 'https://api.vk.com/method/' + method + '?' + $.param(params)
}

function sendRequest(method, params, func) {
    $.ajax({
        url: getUrl(method, params),
        method: 'GET',
        dataType: 'JSONP',
        success: func
    });
}

function getUserInfo() {
    sendRequest('account.getProfileInfo', {}, function (data) {
        console.log(data)
        drawPhoto(data.response)
    });
}

function drawPhoto(data) {
    var html = '';

    html = '<li>' +
        data + " HI" +
        '</li>';

    $('ul').html(html)
}