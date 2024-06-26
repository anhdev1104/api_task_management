import jwt from 'jsonwebtoken';

const middlewareToken = {
  verifyToken: (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    const accessToken = authHeaders && authHeaders.split(' ')[1];
    if (accessToken) {
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token không hợp lệ !' });
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },

  verifyTokenAndAdmin: (req, res, next) => {
    middlewareToken.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.role === 'admin') {
        next();
      } else {
        res.status(403).json('Bạn không có quyền thực hiện chức năng này !');
      }
    });
  },
};

export default middlewareToken;
