import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function testConde(){
  return request('/api/topics')
}

export function testMock(){
  return request('/mock_api/mockdata')
}