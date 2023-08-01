import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const stoken = localStorage.getItem('stoken');
  const router = inject(Router);
  console.log(stoken)
  if(stoken) {
    return true
  } else {
    router.navigate(['/auth/login'])
    return false
  }

  
};
