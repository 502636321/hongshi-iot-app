import request from '@/api/request'

export function findDevicePage (parameter) {
    return request({
        url: '/device-instance/_query',
        method: 'get',
        params: parameter
    })
}

export function findReport (id) {
    return request({
        url: `/report/${id}`,
        method: 'get'
    })
}
