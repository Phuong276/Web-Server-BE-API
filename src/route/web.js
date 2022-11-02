import express from "express"
import homeController from "../controllers/homeController"
import userController from "../controllers/userController"
import mathangController from "../controllers/mathangController"

let router = express.Router()

let initWebRouters = (app) => {
    router.get("/home", homeController.getHomePage)

    router.get("/createuser", homeController.getCreateUser)
    router.post("/post-createuser", homeController.postCreateUser)

    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-mathangs', mathangController.handleGetAllMathangs)
    router.get('/api/get-all-mathangs-by-idcatelogy', mathangController.handleGetAllMathangsByIdCatelogy)
    router.post('/api/create-new-mathang', mathangController.handleCreateNewMathang)
    router.delete('/api/delete-mathang', mathangController.handleDeleteMathang)
    router.put('/api/edit-mathang', mathangController.handleEditMathang)


    return app.use("/", router)
}

module.exports = initWebRouters