import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const setUserAtArchieve = async (req, res) => {
	try {
		const { username,senderName } = req.body;
		const user = await User.findOne({ username });
		user.archieveUsers.push(senderName)
		console.log(user)
		await user.save();
		res.status(200).json({
			user
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};
export const unsetUserAtArchieve = async (req, res) => {
	try {
		const { username,senderName } = req.body;
		const user = await User.findOne({ username });

		let archieveUsers=user.archieveUsers.filter((el)=>{
			console.log(senderName+" "+el)
			return senderName!=el
		})
		console.log(archieveUsers)
		user.archieveUsers=archieveUsers
		await user.save();
		res.status(200).json({
			user
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const DeleteUserAtArchieve = async (req, res) => {
	try {
		const { username,senderName } = req.body;
		const user = await User.findOne({ username });
		user.deletedUser.push(senderName)
		console.log(user)
		await user.save();

		res.status(200).json({
			user
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};