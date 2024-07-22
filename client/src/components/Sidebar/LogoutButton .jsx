import { BiArchive, BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { set } from "mongoose";

const LogoutButton = ({setShow,show}) => {
	const { loading, logout } = useLogout();
   const updates=()=>{
	setShow(!show)
	localStorage.setItem("show",show);
   }
	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className="flex gap-10">
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
				<BiArchive className='w-6 h-6 text-white cursor-pointer' onClick={updates} />
				</div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;