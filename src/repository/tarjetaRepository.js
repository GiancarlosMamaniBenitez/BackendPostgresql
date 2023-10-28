import Tarjeta from "../models/tarjetamodel.js"

const findAll = async () => {
    try {
        const result = await Tarjeta.findAll({include: Cita});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (Tarjeta) => {
    try {

        const newTarjeta = await Tarjeta.create(Tarjeta);

        return newTarjeta;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Tarjeta.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Tarjeta.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}

const update = async (tarjeta) => {
    try {
        const foundTarjeta =  await tarjeta.findOne({
            where: {
                id: tarjeta.id
            }
        })
  
        foundTarjeta.set(calificacion)
  
        foundTarjeta.save()
  
        return foundTarjeta;
  
    }
    catch(err) {
        console.error(err)
        return null;
    }
  }

const tarjetasRepository = { findAll, create, findOne, remove, update};

export default tarjetasRepositoryRepository; 