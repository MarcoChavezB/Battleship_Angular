import { CanActivateFn } from '@angular/router';

export const desauthGuard: CanActivateFn = (route, state) => {
  return true;
};
