import { TestBed, inject } from '@angular/core/testing';

import { LoginSrvService } from './login-srv.service';

describe('LoginSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSrvService]
    });
  });

  it('should be created', inject([LoginSrvService], (service: LoginSrvService) => {
    expect(service).toBeTruthy();
  }));
});
