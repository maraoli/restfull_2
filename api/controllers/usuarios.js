const generateUniqueID = require('../utils/gerarId');
let user = require('../data/usuarios.json');
let usuarios = user.usuarios.data;

module.exports = {

    async index(request, response){
        //const usuarios = require('../data/usuarios.json')
        if(usuarios){
            //return response.status(200).json(usuarios.usuarios.data)
            return response.status(200).json(usuarios)
        }else{
            return response.status(400).json({error:'Não entendi sua solicitação'});
        }
    },

    async create(request, response){
        const {nome, idade} = request.body;  
        const id = generateUniqueID();
        
        const novoUsuraio = {
            id: id,
            nome: nome,
            idade: idade
        }

        //usuarios.usuarios.data.push(novoUsuraio)
        usuarios.push(novoUsuraio)

        console.log(usuarios);

        return response.status(201).json({id})
    },

    async delete(request, response){
        const {id} = request.params;
        
        let i;
        for(i = 0; i < usuarios.length; i++){
            if(usuarios[i].id == id ){
                break;
            }

            console.log(i);
        }

        if(usuarios[i].id){
            usuarios.splice(i,1);
            console.log(usuarios);
            return response.status(204).send();
        }else{
            return response.status(404).json({erro: 'Usuario não encontado'});
        }
    }
}