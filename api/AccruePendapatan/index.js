const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware

app.use(cors());
app.use(express.json());

//ROUTES//

//create rsui//

app.post("/rsui", async (req, res) => {
  try {
    const { description } = req.body;
    const newRsui = await pool.query("INSERT INTO general_ledger (description) VALUES($1) RETURNING *", [description]);

    res.json(newRsui);
  } catch (err) {
    console.error(err.message);
  }
});


// get all rsui

app.get("/rsui", async(req, res) =>{
    try{ 
        const allRsui = await pool.query('select * from general_ledger');
        res.json(allRsui.rows)
    } catch (err) {
        console.error(err.message)
    }
})


// get a general_ledger

app.get("/rsui/:id", async(req,res) =>{
    try {
        const { id } = req.params;
        const general_ledger = await pool.query ("SELECT * FROM rsui WHERE id = $1", [id]);

        res.json(general_ledger.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

//update a general_ledger

app.put("/rsui/:id", async(req,res) =>{
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateRsui = await pool.query(
            "UPDATE rsui SET description = $1 WHERE id = $2 ",
            [description,id]
        );

        res.json(general_ledger.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

//delete a todo 
app.delete("/rsui/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteRsui = await pool.query("DELETE FROM general_ledger WHERE id = $1", [
        id
      ]);
      res.json("general_ledger was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
