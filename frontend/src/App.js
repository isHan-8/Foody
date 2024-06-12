import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './component/Header/Header';
import Loading from './component/Loading/Loading';
import { useLoading } from './hooks/useLoading';
import { setLoadingInterceptor } from './interceptors/loadingInterceptors';
import { useEffect } from 'react';

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  return (
    <>
    <Loading/>
      <Header />
      <AppRoutes />
    </>
  );
}
export default App;