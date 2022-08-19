import request from '@/api/request'

export function findReportPage (parameter) {
    return request({
        url: '/report',
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