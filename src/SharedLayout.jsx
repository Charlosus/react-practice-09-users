import { Suspense } from 'react';
import { Navigation } from './Navigation';
import { ClipLoader } from 'react-spinners';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<ClipLoader></ClipLoader>}>{children}</Suspense>
    </div>
  );
};
