import request from '@/api/request'

export function findFiles (refId, refType) {
    return request({
        url: '/oss/files',
        method: 'get',
        params: {
            refId: refId,
            refType: refType
        }
    })
}
