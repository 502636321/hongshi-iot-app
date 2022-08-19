import request from '@/api/request'

export function findDataPage (deviceId, parameter) {
    console.log(parameter);
    return request({
        url: `/device-instance/${deviceId}/properties/_query`,
        method: 'get',
        params: {
            'terms[0].column': 'property',
            'terms[0].value': 'temperature',
            'sorts[0].name': 'timestamp',
            'sorts[0].order': 'desc',
            'pageIndex': 2,
            'pageSize': 10
        }
    }).then((resp) => resp.result)
}

export function findProject (id) {
    return request({
        url: `/project/${id}/detail`,
        method: 'get'
    }).then(resp => resp.result);
}
