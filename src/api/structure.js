import request from '@/api/request'

export function findStructureAddressPage (parameter) {
    return request({
        url: '/structure/address',
        method: 'get',
        params: parameter
    })
}

export function findStructurePage (parameter) {
    return request({
        url: '/structure',
        method: 'get',
        params: parameter
    })
}

export function findStructure (id) {
    return request({
        url: `/structure/${id}`,
        method: 'get'
    })
}

export function findStructureDeviceGroup (structureId) {
    return request({
        url: `/structure/${structureId}/device_group`,
        method: 'get'
    })
}

export function findStructureDevices (structureId, deviceType) {
    return request({
        url: `/structure/${structureId}/devices`,
        method: 'get',
        params: {
            deviceType: deviceType
        }
    })
}

export function findStrainRecord (deviceId = '', pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/strain/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...sorter, ...params }
    })
}

export function findStrainChart (deviceId = '', params = {}) {
    return request({
        url: `/strain/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

export function findHydrostaticRecord (deviceId = '', pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/hydrostatic/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...sorter, ...params }
    })
}

export function findHydrostaticChart (deviceId = '', params = {}) {
    return request({
        url: `/hydrostatic/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

export function findElasticstressRecord (deviceId = '', pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/elasticstress/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...sorter, ...params }
    })
}

export function findElasticstressChart (deviceId = '', params = {}) {
    return request({
        url: `/elasticstress/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

// eslint-disable-next-line no-unused-vars
export function findHumitureRecord (deviceId = '', pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/humiture/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...sorter, ...params }
    })
}

export function findHumitureChart (deviceId = '', params = {}) {
    return request({
        url: `/humiture/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

// eslint-disable-next-line no-unused-vars
export function findAnemoclinographRecord (deviceId = '', pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/anemoclinograph/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...params }
    })
}

export function findAnemoclinographChart (deviceId, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/anemoclinograph/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

// eslint-disable-next-line no-unused-vars
export function findBeidouRecord (deviceId = '', pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/beidou/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...params }
    })
}

// eslint-disable-next-line no-unused-vars
export function findBeidouChart (deviceId, params = {}) {
    return request({
        url: `/beidou/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

// eslint-disable-next-line no-unused-vars
export function findInclinometerRecord (deviceId, pagination = {}, sorter = {}, params = {}) {
    // 组装参数 比如 排序/过滤等
    return request({
        url: `/inclinometer/${deviceId}/record`,
        method: 'get',
        params: { ...pagination, ...sorter, ...params }
    })
}

export function findInclinometerChart (deviceId, params = {}) {
    return request({
        url: `/inclinometer/${deviceId}/chart`,
        method: 'get',
        params: { ...params }
    })
}

export function findDevice (key = '') {
    return request({
        url: `/device/${key}`,
        method: 'get',
        params: { }
    })
}