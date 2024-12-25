import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { Types } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const tagSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
    },
);

const contentTypes = ['image', 'video', 'article', 'audio']; // Extend as needed

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});


const linkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: 'User', required: true },
});

const UserModel =   Model('User', userSchema);
const TagModel =  Model('Tag', tagSchema);
const ContentModel = Model('Content', contentSchema);   
const LinkModel = Model('Link', linkSchema);


export {UserModel , TagModel , ContentModel , LinkModel};