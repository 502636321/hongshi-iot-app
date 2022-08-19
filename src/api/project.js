import request from '@/api/request'

export function findDevicePage (parameter) {
    return request({
        url: '/device-instance/_query',
        method: 'get',
        params: parameter
    })
}

export function findProject (id) {
    return request({
        url: `/project/${id}/detail`,
        method: 'get'
    }).then(resp => resp.result);
}
