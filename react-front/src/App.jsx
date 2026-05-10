import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import AuthRequired from "./components/AuthRequired"

import RootLayout from "./layouts/RootLayout"

import Home from "./pages/Home"
import Login from "./pages/Login"

import NotFound from "./pages/NotFound"
import PlotlyCharts from "./pages/PlotlyCharts"
import D3Charts from "./pages/D3Charts"
import { AuthProvider } from "./contexts/AuthContext"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />      
      <Route path="login" element={<Login />} />     
      <Route path="plotly-demo" element={<PlotlyCharts />} />
      <Route path="d3-demo" element={ <D3Charts />} />     
      <Route path="*" element={<NotFound />} />         
    </Route>
  )
)

export default function App() {
  return (
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
    
  )
}