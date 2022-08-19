import request from '@/api/request'

export function findAlarmPage (parameter) {
    return request({
        url: '/device/alarm/history/_query',
        method: 'get',
        params: parameter
    })
}
