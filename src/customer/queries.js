const getcustomer = "select * from customer";

const getcustomerByEmail = (email) => {
  return pool.query('SELECT * FROM customer WHERE email = $1', [email])};

const checkEmailExists = "select c from customer c where c.email = $1";

const fetchUser = "select firstname, lastname, email, password from customer c where c.email = $1";

const deletecustomer = "delete from customer where id = $1";

const updatecustomer =  "update customer set name = $1 where id = $2";

const addcustomer = (firstname, lastname, email, password) => {
    return pool.query(
      'INSERT INTO customer (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstname, lastname, email, password]
    );
  };
  

module.exports = {
    getcustomer,
    getcustomerByEmail,
    checkEmailExists,
    addcustomer,
    deletecustomer,
    updatecustomer,
    fetchUser,
};

                                