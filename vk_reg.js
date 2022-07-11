import * as connect from '@vkontakte/vkui-connect';


connect.send("VKWebAppInit", {});

connect.subscribe((e) => console.log(e));
