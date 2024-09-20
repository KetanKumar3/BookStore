import user from "../model/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        const users = await user.findOne({ email })

        if (users) {
            return res.status(400).json({ message: "user exists" })
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const createdUser = await user.create({
            fullname: fullname,
            email: email,
            password: hashPassword
        })

        res.status(200).json({
            message: "user created", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
                password:createdUser.password
            },
        })
    } catch (error) {
        console.log("error", error.message)
        res.status(500).json({ message: "internal error" })
    }
}

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email });
        const isMatch = await bcryptjs.compare(password, User.password);
        if (!User || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                User: {
                    _id: User._id,
                    fullname: User.fullname,
                    email: User.email,
                    password:User.password
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};