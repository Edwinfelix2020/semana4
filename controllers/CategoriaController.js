const db = require('../models');
const categoria = require('../models/categoria');


exports.list = async(req, res, next)=>{
    try{
        const register = await db.categoria.findAll();  
        if (register){
            res.status(200).json(register);
        }else{
            res.status(404).send({
                message: 'No hay categorias registradas'
            })
        }
 
    } catch (error){
        res.status(500).send({
            message: 'Error->'
        })
        next(error);

    }
       
};

exports.add = async(req, res, next)=>{
    try{       
        const registro = await db.categoria.create(req.body);
        res.status(200).json(registro);
        
    }catch (error){
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
    
};

exports.update = async(req, res, next)=>{
    try{
        
            const register = await db.categoria.update({nombre: req.body.nombre, descripcion: req.body.descripcion},
            {
            where:{
                id: req.body.id
            },
            // returning: true 
            });
            res.status(200).json(register);
        

    }catch (error){
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }

};

exports.activate = async(req, res, next)=>{
    try{
        
            const register = await db.categoria.update({estado: 1},
            {
            where:{
                id: req.body.id
            },
            // returning: true 
            });
            res.status(200).json(register);
        

    }catch (error){
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }

};

exports.deactivate = async(req, res, next)=>{
    try{
        
            const register = await db.categoria.update({estado: 0},
            {
            where:{
                id: req.body.id
            },
            // returning: true 
            });
            res.status(200).json(register);
        

    }catch (error){
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }

};

