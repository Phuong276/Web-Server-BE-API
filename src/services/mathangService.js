import db from "../models/index"

let getAllMathangs = (mathangId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mathangs = ''
            if(mathangId === 'ALL') {
                mathangs = await db.MatHang.findAll( {
                })
            }
            if(mathangId && mathangId !== 'ALL') {
                mathangs = await db.MatHang.findOne( {
                    where: {id: mathangId}
                })
            }
            resolve(mathangs)
        } catch(e) {
            reject(e)
        }
    })
}

let getAllMathangsByIdCatelogy = (mathangId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mathangs = ''
            if(mathangId === 'ALL') {
                mathangs = await db.MatHang.findAll( {
                })
            }
            if(mathangId && mathangId !== 'ALL') {
                mathangs = await db.MatHang.findOne( {
                    where: {category_id: mathangId}
                })
            }
            resolve(mathangs)
        } catch(e) {
            reject(e)
        }
    })
}

let createNewMathang = (data) => {
    return new Promise (async (resolve, reject) => {
        try {
            await db.MatHang.create( {
                name: data.name,
                image: data.image,
                description: data.description,
                price: data.price,
                quantity: data.quantity,
                type: data.type,
                category_id: data.category_id,
                supplier_id: data.supplier_id,
                riview_id: data.riview_id
            })
            resolve( {
                errCode: 0,
                message: 'Create Ok'
            })
        } catch(e) {
            reject(e)
        }
    })
}

let deleteMathang = (mathangId) => {
    return new Promise (async (resolve, reject) => {
        let foundMathang = await db.MatHang.findOne( {
            where: { id: mathangId}
        })
        if(!foundMathang) {
            resolve( {
                errCode: 2,
                errMessage: 'Mat hang isnt exit'
            })
        }
        await db.MatHang.destroy( {
            where: { id: mathangId}
        })
        resolve( {
            errCode: 0,
            errMessage: 'Delete Ok'
        })
    })
}

let updateMathang = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required paramets!'
                })
            }
            let mathang = await db.MatHang.findOne({
                where: {id: data.id},
                raw: false
            })
            if(mathang) {
                mathang.name = data.name,
                await mathang.save()
                resolve({
                    errCode: 0,
                    message: 'Update the user succeeds!'
                })
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'Users not found'
                });
            }
        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllMathangs: getAllMathangs,
    getAllMathangsByIdCatelogy: getAllMathangsByIdCatelogy,
    createNewMathang: createNewMathang,
    deleteMathang: deleteMathang,
    updateMathang: updateMathang,
}