import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import useGetConversationIdv from "../../hooks/useGetConversationId";
import toast from "react-hot-toast";
const MessageContainer = () => {
    const navigate=useNavigate();
	const shows=localStorage.getItem("show")
	const obj = localStorage.getItem("chat-user"); 
	const user=JSON.parse(obj);
	const {ChatId, selectedConversation, setSelectedConversation } = useConversation();
    console.log("convserstaion : ",selectedConversation?.username)

    const DeleteUserChat=async()=>{
		try {
			const res = await fetch("http://localhost:8000/api/users/delete", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
                credentials:"include",
				body: JSON.stringify({
					username:user.username,
					senderName:selectedConversation?.username}),
			});
			const data = await res.json();
			console.log(data.user)
			localStorage.setItem("chat-user",JSON.stringify(data.user))
			// if (data.error) {
			// 	throw new Error(data.error);
			// }
		} catch (error) {
			toast.error(error.message);
		}
		window.location.reload();
    }
    const ArchieveUser=async()=>{
        try {
			const res = await fetch("http://localhost:8000/api/users", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
                credentials:"include",
				body: JSON.stringify({
					username:user.username,
					senderName:selectedConversation?.username}),
			});
			const data = await res.json();
			console.log(data.user)
			localStorage.setItem("chat-user",JSON.stringify(data.user))
			// if (data.error) {
			// 	throw new Error(data.error);
			// }
		} catch (error) {
			toast.error(error.message);
		}
		window.location.reload();

    }
	const undoUser=async()=>{
        try {
			const res = await fetch("http://localhost:8000/api/users/undo", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
                credentials:"include",
				body: JSON.stringify({
					username:user.username,
					senderName:selectedConversation?.username}),
			});
			const data = await res.json();
			console.log(data.user)
			localStorage.setItem("chat-user",JSON.stringify(data.user))
			// if (data.error) {
			// 	throw new Error(data.error);
			// }
		} catch (error) {
			toast.error(error.message);
		}
		window.location.reload()
    }

    
    useGetConversationIdv()
	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
    // alert(selectedConversation)
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='px-4 py-2 mb-2 bg-slate-500'>
						<span className='label-text'>To:</span>{" "}
						<span className='font-bold text-gray-900'>{selectedConversation.fullName}</span>
						<span className='ml-[200px] font-bold text-white text-end' onClick={DeleteUserChat}>Delete</span>
						{
						shows==="true"?	<span className='ml-[190px] font-bold text-white text-end' onClick={ArchieveUser}>Archieve</span>
							:<span className='ml-[190px] font-bold text-white text-end' onClick={undoUser} >Undo</span>
						}
                        <span className="ml-[300px] font-bold text-white text-end" onClick={()=>
                        {
                            navigate(`/call/${ChatId._id}`)
                        }}>(Call)</span>
                     {/* <FontAwesomeIcon icon={} size={100} style={{color:'white',}} />  */}
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl text-center md:text-6xl' />
			</div>
		</div>
	);
};
