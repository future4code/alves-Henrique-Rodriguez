import express from "express"
import { ShowBusiness } from "../business/ShowBusiness"
import { ShowController } from "../controller/ShowController"
import { BandDatabase } from "../data/BandDatabase"
import { ShowDatabase } from "../data/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const showRouter = express.Router()

const showBusiness = new ShowBusiness(
    new IdGenerator(),
    new ShowDatabase(),
    new BandDatabase(),
    new Authenticator()
)

const showController = new ShowController(
    showBusiness
)

showRouter.post("/", showController.createShow)
showRouter.get("/:weekDay", showController.getShowsByDate)