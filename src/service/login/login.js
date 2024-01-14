import dRequest from '../index'

export function requestData() {
  return dRequest.get({
    url: '/get',
    showLoading: true
  })
}
