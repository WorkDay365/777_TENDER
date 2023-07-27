import User from '../models/user.js'
import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'


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
        const { username, password} = req.body 
        const user = await User.findOne({ username})
        if (!user) {
            return res.json({
                message: "Дане ім'я не існує."
            })
        }

        const isPasswordCorrect = await bcrypt.compare( password, user.password)
        if (!isPasswordCorrect) {
            return res.json({
                message: "Не вірний пароль."
            })  
        }
 
        const token = jwt.sign({
            id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
        )

        res.json({
            token, user, message:'Ви увійшли в систему.'
        })


    } catch (error) {
        res.json({
            message:'Похибка авторизації.'
        })
    }
}
// Get me
export const getMe = async(req, res) => {
    try{
        const user = await User.findById(req.userId)

        if (!user) {
            return res.json({
                message: "Дане ім'я не існує."
            })
        }

        const token = jwt.sign({
            id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
        )

        res.json({
            user,
            token
        })

    } catch (error) {
        res.json({
            message:'Похибка авторизації.'
        })
    }
}