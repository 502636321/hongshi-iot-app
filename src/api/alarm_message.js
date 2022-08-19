import request from '@/api/request'

export function findAlarmMessagePage (parameter) {
    return request({
        url: '/alarm_message',
        method: 'get',
        params: parameter
    })
}