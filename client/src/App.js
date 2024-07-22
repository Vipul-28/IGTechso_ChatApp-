import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Call from "./pages/Call/Call";
function App() {
	const { authUser } = useAuthContext();
  
	return (
		<div className='flex items-center justify-center h-screen p-4'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        <Route path="call/:callId" element={<Call />}/>
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;