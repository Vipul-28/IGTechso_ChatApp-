import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetConversationIdv = () => {
	const [loading, setLoading] = useState(false);
	const { messages,ChatID, selectedConversation,setChatId } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`http://localhost:8000/api/messages/id/${selectedConversation._id}`,{                credentials:"include",
            });
				const data = await res.json();
                console.log("hey this is conversatiom data : ",data._id)
                setChatId(data)
				if (data.error) throw new Error(data.error);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id]);

	return { messages, loading };
};
export default useGetConversationIdv;