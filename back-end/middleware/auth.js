// this module is not used at the moment but it's code is used by copy and paste in get single student .

const jwt = require('jsonwebtoken');
const JWTSecret = process.env.JWT_SECRET;

const authoriseRoute = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, `${JWTSecret}`);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.studentId !== userId) {
        throw 'Authorisation failed';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

export default authoriseRoute;