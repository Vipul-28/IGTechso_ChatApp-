import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
    ChatId:null,
    setChatId:(ChatId)=>set({ChatId})
}));

export default useConversation;