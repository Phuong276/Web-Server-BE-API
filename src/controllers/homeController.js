import db from '../models/index'
import createUserService from "../services/createUserService"

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render("homePage.ejs", {
            data: data
        })
    } catch(e) {
        console.log(e)
    }
}

let getCreateUser = (req, res) => {
    return res.render('createUserView.ejs')
}

let postCreateUser = async (req, res) => {
    let message = await createUserService.createNewUser(req.body)
    console.log(message)
    return res.send('create')
}

module.exports = {
    getHomePage: getHomePage,
    getCreateUser: getCreateUser,
    postCreateUser: postCreateUser,
}