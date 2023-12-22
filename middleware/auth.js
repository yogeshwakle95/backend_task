const jwt = require('jsonwebtoken');
const secretKey = "mySuperSecretKey123";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.user = decoded;pl
      next();
    });
  } else {
    res.status(401).json({ message: 'Unauthorized. Please login first.' });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      const token = req.headers.authorization;
      const decoded = await jwt.verify(token, secretKey);
      req.user = decoded;
     
    }
    // console.log(req.user);
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Unauthorized. Only admins can perform this actions.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const isteacher = async (req, res, next) => {
  try {
    if (!req.user) {
      const token = req.headers.authorization;
      const decoded = await jwt.verify(token, secretKey);
      req.user = decoded;
     
    }
    if (req.user && req.user.role === 'teacher') {
      next();
    } else {
      res.status(403).json({ message: 'Unauthorized. Only Teacher can perform this actions.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { verifyToken, isAdmin,isteacher };
