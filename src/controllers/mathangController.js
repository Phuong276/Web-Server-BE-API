import mathangService from "../services/mathangService"

let handleGetAllMathangs = async (req, res) => {
    let id = req.query.id;
    let mathangs = await mathangService.getAllMathangs(id);

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleGetAllMathangsByIdCatelogy = async (req, res) => {
    let id = req.query.category_id;
    let mathangs = await mathangService.getAllMathangsByIdCatelogy(id);

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleCreateNewMathang = async (req, res) => {
    let message = await mathangService.createNewMathang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleDeleteMathang = async (req, res) => {
    if(!req.body.id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: "Missing requid parameters"
        })
    }
    let message = await mathangService.deleteMathang(req.body.id)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleEditMathang = async (req, res) => {
    let data = req.body
    let message = await mathangService.updateMathang(data)
    return res.status(200).json( {
        errMessage: message
    })
}

module.exports = {
    handleGetAllMathangs: handleGetAllMathangs,
    handleGetAllMathangsByIdCatelogy: handleGetAllMathangsByIdCatelogy,
    handleCreateNewMathang: handleCreateNewMathang,
    handleDeleteMathang: handleDeleteMathang,
    handleEditMathang: handleEditMathang,
}