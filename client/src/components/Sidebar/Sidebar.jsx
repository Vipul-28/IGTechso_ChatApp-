import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton ";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const[show,setShow]=useState(true);
	const shows=localStorage.getItem("show")
	return (
		<div className='flex flex-col p-4 border-r border-slate-500 '>
			<SearchInput />
			<br />
			{
				shows==="true"?
				<h1 className="font-bold text-center underline">Users</h1>
				:
				<h1 className="font-bold text-center underline">Archived Users</h1>
			}
			<div className='px-3 divider'></div>
			<Conversations show />
			<LogoutButton setShow={setShow} show={show}/>
		</div>
	);
};
export default Sidebar;