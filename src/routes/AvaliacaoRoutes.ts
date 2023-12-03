import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/aval', AvaliacaoController.listAvaliacao)

AvaliacaoRouter.get('/caval', AvaliacaoController.avalCreatepage)
AvaliacaoRouter.get('/daval', AvaliacaoController.avalDeletepage)

AvaliacaoRouter.post('/aval', AvaliacaoController.createAvaliacao)

AvaliacaoRouter.delete('/aval', AvaliacaoController.deleteAval)

AvaliacaoRouter.put('/aval', AvaliacaoController.updateAval)

export default AvaliacaoRouter;