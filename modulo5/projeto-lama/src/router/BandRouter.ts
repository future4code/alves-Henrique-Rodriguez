import express from "express"
import { BandBusiness } from "../business/BandBusiness"
import { BandController } from "../controller/BandController"
import { BandDatabase } from "../data/BandDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const bandRouter = express.Router()

const bandBusiness = new BandBusiness(
    new IdGenerator(),
    new BandDatabase(),
    new Authenticator()
)

const bandController = new BandController(
    bandBusiness
)

bandRouter.get("/", bandController.getBand)
bandRouter.post("/", bandController.createBand)