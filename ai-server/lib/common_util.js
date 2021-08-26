const jwt = require("jsonwebtoken");

const signToken = async (data) => {
  try {
    if (data) {
      const { _id, email, name } = data;
      let token = jwt.sign({ _id, email, name }, process.env.SECRET_KEY);
      return token;
    }
  } catch (err) {
    throw err;
  }
};
const getTokenFromHeader = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

const verifyTokenFromHeader = async (req) =>
  new Promise((resolve, reject) => {
    const token = getTokenFromHeader(req);
    if (!token) {
      return reject({ err: true, message: "No token provided" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decodedData) => {
      if (err) {
        return reject(err);
      }

      return resolve(decodedData);
    });
  });

const decodeToken = async (req) => {
  try {
    const decodedData = await verifyTokenFromHeader(req);
    return decodedData;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      throw new Error("TokenExpiredError");
    }
  }
};

module.exports = {
  decodeToken,
  signToken,
};
