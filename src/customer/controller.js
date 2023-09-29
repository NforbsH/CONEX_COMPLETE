 //BUSINESS LOGIC RELATING TO THE ROUTES FILE.//

const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcrypt');


//GET CUSTOMER
const getcustomer = (req, res) => {  
   pool.query(queries.getcustomer, (error, results) => { //query method having 2 parameters.(variable name for sql and callback fxn)
        if (error) throw error;
        res.status(200).json(results.rows); //if the query is successful, it sends back the JSON or students in db.
   });
};

// GET CUSTOMER BY EMAIL
const getcustomerByEmail = (req, res) => {
  console.log(req.body)
    const email = parseInt(req.params.email);
    pool.query(queries.getcustomerByEmail, [email], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
 };

// const addcustomer = (req, res) => {
//     const {  email, password } = req.body;
//     //check if email exists
//     pool.query(queries.checkEmailExists, [email], (error, results) => {
//         if (results.rows.length) {
//             // res.status(400).send("Email already exists.");
//             console.log(error);
//         }
        
//     });
// };

//DELETE CUSTOMER
 const deletecustomer = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.deletecustomer, [id], (error, results) => {
        const nocustomerFound = results.rows.length;
        if(error) throw res.status(404).send("Customer does not exist in the database");  
            res.status(200).send("Customer deleted successfully");                                                                                                  
    });
};




// UPDATE CUSTOMER

const updatecustomer = (req, res) => {
    const id =  parseInt(req.params.id);
    const { name }= req.body;

    // pool.query(queries.getcustomerById, [id], (error, results) => {
    //     const nocustomerFound = !results.rows.length;
    //     if (nocustomerFound) {
    //         res.send("Customer does not exist in the database");
    //     };

        pool.query(queries.updatecustomer, [name, email], (error, results) => {
            if (error) throw error;
            res.status(200).send("Customer updated Successfully");
        });
    };

// SIGN UP

const signup = async (req, res) => {
  const { firstname, lastname, email, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await createCustomer(firstname, lastname, email, hashedPassword);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};



// LOGIN
const login = async (req, res) => {
  console.log('Request Body:', req.body.email);
  const { email, password } = req.body;

  try {
    // const result = getcustomerByEmail(req.body.email);
    const result = await pool.query(queries.fetchUser, [email]);    

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const customer = result.rows[0];
    // console.log(customer.password);
    console.log("This is the result of the fetch query ", customer.password);

    // const match = await bcrypt.compare(password, customer.password);

    // if (!match) {
    //   return res.status(401).json({ error: 'Invalid credentials' });
    // }
    if(password !== customer.password){
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {   /// export it as an object because they're going to be multiple.
    getcustomer,
    getcustomerByEmail,
    deletecustomer,
    updatecustomer,
    signup,
    login,
};                                                                                                          