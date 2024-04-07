const { Router } = require('express')
const user = require('../controllers/user')
const router = Router()


router.get('/',user.getUsers);
router.get('/:id',user.getUser);
router.post('/create',user.createUser);
router.put('/update/:id',user.updateUser);
router.delete('/delete/:id',user.deleteUser);



module.exports = router;