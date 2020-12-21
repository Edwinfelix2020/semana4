var jwt = require('jsonwebtoken');
const models = require('../models');

const  checkToken = async (token) =>{
    let localID = null;
    try{
        const {id} = await token.decode(token);
        localID = id;

    }catch (error){

    }
    const user = await models.usuario.findOne({where:{
        id: localID,  //lo cambien el profe en clase antes era id : id
        // estado: 1 
    }});
    if (user){
        const token = encode(user);
        return {
            token,
            rol: user.rol
        }

    }else{
       return false
    }

}


module.exports = {

    //generar el token
    encode: async(user)=>{
        const token = jwt.sign({
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol,
            estado: user.estado            

        },'config.secret',{
            expiresIn: 86400,
        }
        );
        return token;

    },
    //permite decodificar el token
    decode: async(token)=>{
        try{
            const{ id } = await jwt.verify(token,'config.secret');  // si es un toquen valido me saca el id
            const user = await models.usuario.findOne({where:{
                id: id,
                // estado: 1 
            }});
            if (user){
                return user;
            }else{
                return false;
            }

        } catch(error){
            const newToken = await chekToken(token);
            return newToken

        }

    }
    
}