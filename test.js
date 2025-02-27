const mongoose = require('mongoose');
const connectDB = require('./database');
const User = require('./models/User');

const createSampleData = async () => {
    try {
        await connectDB();

        // 1. Créer un utilisateur
        const newUser = new User({
            username: "chaimaa",
            email: "chaimaa@example.com",
            password: "securepassword"
        });

        await newUser.save();
        console.log('Utilisateur créé:', newUser);

        // 2. Créer un blog avec l'utilisateur comme auteur
        // const newBlog = new Blog({
        //     title: "Mon premier article",
        //     description: "Ceci est une description de test.",
        //     category: "TEC",
        //     author: newUser._id,
        //     image: "https://technologywithin.com/wp-content/uploads/2023/07/tech-roundup-blog-2-COVER.png"
        // });

        // await newBlog.save();
        // console.log('Blog créé:', newBlog);

        mongoose.connection.close();
    } catch (error) {
        console.error(error);
    }
};

createSampleData();