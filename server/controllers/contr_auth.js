import User from '../models/user.js'
import bcrypt from 'bcryptjs' 


// Register User
export const register = async(req, res) => {
    try{
        const { username, password} = req.body 

        const isUser = await User.findOne({ username})

        if (isUser) {
            return res.json({
                message: "Дане ім'я користувач вже заняте."
            })
        } 

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })

        await newUser.save()

        res.json({
            newUser,
            message: "Регистрація пройшла успішно."

        })

    } catch (error) {
        res.json({ message:'Похибка при створенны нового користувача.'})
    }
}
// Login user
export const login = async(req, res) => {
    try{

    } catch (error) {}
}
// Get me
export const getMe = async(req, res) => {
    try{

    } catch (error) {}
}