class UserController{

    async index(req,res) {
        return res.send('All Users');
    }

    async show(req,res) {
        return res.send('show Users');
    }

    async create (req,res) {
        return res.send('create Users');
    }

    async update(req,res) {
        return res.send('Update Users');
    }

    async delete (req,res) {
        return res.send('Delete Users');
    }

}

export default UserController;