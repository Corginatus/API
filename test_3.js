import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit").then(r => console.log(data));

bridge.send('VKWebAppGetAuthToken', {
        "app_id": 8223714,
        "scope": "friends,status"
    })
    .then(data => {
        console.log(data.access_token);
    })
    .catch(error => {
        console.log(error);
    });
