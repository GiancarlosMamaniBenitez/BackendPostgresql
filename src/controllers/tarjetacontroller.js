import TarjetaRepository from "../repository/tarjetaRepository.js";

const findAll = async (req, res) => {
    const result = await TarjetaRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await TarjetaRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await TarjetaRepository.create(req.body);

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await TarjetaRepository.remove(id)

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await TarjetaRepository.update(req.body)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const TarjetaController = { findAll, create, findOne, remove, update }

export default TarjetaController;