//imports
import express from "express";
import cors from "cors";
import { db } from "./utils/dbConnection.js"; //destructuring db variable (to just import the db item)

//configs - initialise pckgs
const app = express();
app.use(express.json());
app.use(cors());

//port
const PORT = process.env.MY_PORT; //port number stored in .env

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

//root route
app.get("/", (req, res) => {
  res.json({ message: "This is the root route. Welcome User!" });
});

//===============================================================

//todo - want to READ data from the database
// app.get("/biscuits", async (req, res) => {
//   //query db
//   try {
//     const data = await db.query(`SELECT * FROM biscuits`);
//     res.json(data.rows);
//   } catch (error) {
//     console.log(
//       "Error, error, error, something broke! Check your connection string"
//     );
//     res.status(500).json({ success: false });
//   }
// });

//todo - want to CREATE new data

// app.post("/addBiscuit", (req, res) => {
//   // const body = req.body; // in the body object, we are storing the new values to add to the table
//   const { biscuit_name, src, description, crunchiness } = req.body; //destructured version of the body

//   try {
//     const insert = db.query(
//       `INSERT INTO biscuits (biscuit_name, src, description, crunchiness) VALUES ($1, $2, $3, $4)`,
//       [biscuit_name, src, description, crunchiness]
//     ); // if you are NOT destructuring the body object, use dot notation (body.biscuit_name ...)
//     res.status(200).json({ success: true }); // this is to have a confirmation that the body was sent to the db correctly
//   } catch (error) {
//     console.log(
//       "Error, error, error, something broke! Check your connection string"
//     );
//     res.status(500).json({ success: false });
//   }
// });

//=========================================================================
//stretch goal: want to DELETE data (try delete before update if do stretch goals)
//stretch goal: want to UPDATE data
