const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  index,
  bestSeller,
  create,
  login,
  checkout,
  checkToken
};

async function index(req, res)  {
  res.send('Home Page');
};
async function bestSellers(req, res)  {
  res.send('Best Sellers Page');
};

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function checkout(req, res) {
  if (req.isAuthenticated()) {
    res.status(200).json({ message: 'Checkout successful'});
  } else {
    try {
      await create(req, res);
    } catch (err) {
      res.status(500).json({ message: 'Error'});
    }
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}