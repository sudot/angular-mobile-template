import { Injectable } from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  mock() {
    Mock.mock('/mock/login', { 'token': Mock.mock('@string(32)') });
    Mock.mock('/mock/logout', '');
    Mock.mock('/mock/users/current', {
      'permissions': [],
      'roles': [],
      'rank': {
        'id': 1,
        'deleted': false,
        'createdDate': 1544777555000,
        'createdBy': null,
        'lastModifiedDate': 1544777555000,
        'lastModifiedBy': null,
        'order': 1,
        'name': '体验',
        'deposit': 0,
        'isDefault': true
      },
      'user': {
        'id': 5,
        'deleted': false,
        'createdDate': 1544777567000,
        'createdBy': null,
        'lastModifiedDate': 1544777567000,
        'lastModifiedBy': null,
        'username': '13512345678',
        'enabled': true,
        'locked': false,
        'lockDate': null,
        'lastLoginIp': null,
        'lastLoginDate': null,
        'mobile': '135****5678',
        'nickname': '玩家135',
        'head': null,
        'point': 0,
        'credit': 0,
        'balance': 1000000,
        'deposit': 0,
        'rank': 1,
        'gameMaster': false
      }
    });
  }
}
