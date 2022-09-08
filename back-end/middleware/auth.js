const jwt = require('jsonwebtoken');
const JWTSecret = process.env.JWT_SECRET;

const authoriseRoute = (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, `${JWTSecret}`);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.studentId !== userId) {
        throw 'Authorisation failed';
    } else {
    return true;
    }
  } catch {
    res.status(401).json({ success: false, message : "authorisation failed"});
  }
};

export default authoriseRoute;