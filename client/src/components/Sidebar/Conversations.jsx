import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
const Conversations = ({show}) => {
	const shows=localStorage.getItem("show")
	const obj = localStorage.getItem("chat-user"); 
	const user=JSON.parse(obj);
	let deleteUser=user.deletedUser;
	let archieveUser=user.archieveUsers;
	console.log(deleteUser)
	const { loading, conversations } = useGetConversations();
    console.log("Hey this is real data :" ,conversations, shows)
	return (
		<div className='flex flex-col py-2 overflow-auto'>
			{
			
			(shows==="true")?
			conversations.map((conversation, idx) => (
				// console.log(conversation

				(deleteUser.indexOf(conversation.username) !=-1
				|| archieveUser.indexOf(conversation.username)!=-1
				 )?<div></div>:
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			)):
			conversations.map((conversation, idx) => (
				// console.log(conversation

				(archieveUser.indexOf(conversation.username)!==-1 && deleteUser?.indexOf(conversation?.username) ===-1)?
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>	:<div></div>
				))
			
			
			
			}

			{loading ? <span className='mx-auto loading loading-spinner'></span> : null}
		</div>
	);
};
export default Conversations;