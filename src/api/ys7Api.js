import ys7_request from "@/api/ys7Request";
import axios from 'axios'

export function getToken() {
    let token = JSON.parse(localStorage.getItem('YS7_ACCESS_TOKEN') || '{}');
    if (token && token.accessToken && token.expireTime && token.expireTime > Date.now()) {
        return new Promise((resolve) => {
            resolve(token);
        });
    } else {
        let formData = new FormData();
        formData.append('appKey', '5a2fe8c17c164ce09f7cffc2cc70bc2c');
        formData.append('appSecret', '325dd28c7c84ea16f7f87feabdcb1d28');
        return axios.post('https://open.ys7.com/api/lapp/token/get', formData).then((resp) => resp.data.data);
    }
}

export function getDeviceInfo(accessToken, deviceSerial) {
    const formData = new FormData();
    formData.append('accessToken', accessToken);
    formData.append('deviceSerial', deviceSerial);
    return ys7_request.post(
        'https://open.ys7.com/api/lapp/device/info',
        formData
    );
}
