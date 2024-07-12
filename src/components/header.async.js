import { lazy } from 'react';

const HeaderAsync = lazy(() => import('./header'));

export {HeaderAsync as Header};