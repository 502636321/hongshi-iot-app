import request from '@/api/request'

export function findProvArea (parameter) {
    return request({
        url: '/data/area/prov',
        method: 'get',
        params: parameter
    })
}

export function findCityArea (provId, parameter) {
    return request({
        url: `/data/area/${provId}/city`,
        method: 'get',
        params: parameter
    })
}