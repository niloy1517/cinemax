import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        
        if(!token) {
            return res.status(400).json({
                success: false,
                message: 'token not found'
            });
        }

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        if(decodeToken.id) {
            req.userId = decodeToken.id
        }
        
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export default userAuth;