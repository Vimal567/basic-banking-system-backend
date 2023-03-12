const User = require("../model/user.model");

const getAllUsers = async () => {
  return await User.find();
};

const transfer = async (payload) => {
  const { fromId, toId, amount } = payload;
  const user1 = await User.find({ id: fromId });
  const user2 = await User.find({ id: toId });
  const amount1 = user1[0].balance - amount;
  const amount2 = user2[0].balance + amount;
  await User.findOneAndUpdate({ id: fromId }, { balance: amount1 });
  await User.findOneAndUpdate({ id: toId }, { balance: amount2 });
  return;
};

module.exports = {
  getAllUsers,
  transfer,
};
