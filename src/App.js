import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import LayOut from './Pages/Layout/LayOut';
import NotFound from './Pages/NotFound/NotFound';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Category from './components/Category/Category';

import Specific from './components/Specific/Specific';






function App() {

  const queryClient = new QueryClient()
  const routers = createBrowserRouter([
    {
      path: '',
      element: <LayOut />,
      children: [
        {
          index: true, element: <Home />,
        },
        { path: '*', element: <NotFound /> },
        { path: 'product/:id', element: <ProductDetails /> },
        { path: 'category', element: <Category /> },
        { path: 'category/:sup', element: <Specific /> },



      ]
    }
  ])



  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App;
