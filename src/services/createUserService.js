import bcrypt from 'bcryptjs'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10)

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => { 
        try {
            var hashPassword = await bcrypt.hashSync(password, salt)
            resolve(hashPassword)
        } catch(e) {
            reject(e);
        }
    })
}

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                username: data.username,
                password: hashPasswordFromBcrypt,
                first_name: data.first_name,
                last_name: data.last_name,
                gender: data.gender === "1"? true : false,
                email: data.email,
                birthday: data.birthday,
                phone: data.phone,
                address: data.address,
                isBusiness: data.isBusiness,         
            })
            resolve('Create succeed!')
        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
}