import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
                type: String, required: true,
                match: /^[^0-9][a-zA-Z0-9_]+$/,
                minlength: 3
            },
        status: {type: String, required: true}
    }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;

