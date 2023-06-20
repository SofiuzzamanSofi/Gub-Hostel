import mongoose from "mongoose";

export const UserModel = mongoose.model('User', new mongoose.Schema());
// export const UserModel = mongoose.models?.User

// User Actions
// get all users
export const getUsers = () =>  UserModel.find();
// get one user by email 
export const getUserByEmail = (email: string) => UserModel.findOne({ email }) ;
// get one user by id 
export const getUserById = (id: number | string) =>  UserModel.findOne({ id }) ;
// delete one user by id 
export const deleteUserById = (id: number | string) =>  UserModel.findOneAndDelete({ _ud: id }) ;
// update one user by id 
export const updateUserById = (id: number | string, values: Record<string, any>) =>  UserModel.findByIdAndUpdate(id, values) 


// // User Config
// const UserSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     username: { type: String, required: true },
//     authentication: {
//       password: { type: String, required: true, select: false },
//       salt: { type: String, select: false },
//       sessionToken: { type: String, select: false },
//     },
//   });
  
//   export const UserModel = mongoose.model('User', UserSchema);
// // create one user 
// export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());