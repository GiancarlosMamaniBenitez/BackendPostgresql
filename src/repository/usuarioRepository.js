import Usuario from "../models/usuariomodel.js"

const findAll = async () => {
    try {
        const result = await Usuario.findAll({include: Usuario});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (usuario) => {
    try {

        const newUsuario = await Usuario.create(usuario);

        return newUsuario;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Usuario.findOne({
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
        await Usuario.destroy({
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

const update = async (usuario) => {
    try {
        const foundUsuario =  await Usuario.findOne({
            where: {
                id: usuario.id
            }
        })
  
        foundUsuario.set(usuario)
  
        foundUsuario.save()
  
        return foundUsuario;
  
    }
    catch(err) {
        console.error(err)
        return null;
    }
  }

const usuariosRepository = { findAll, create, findOne, remove, update};

export default usuariosRepository; 