const { Pool } = require("pg");
const args = process.argv.slice(2);

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT students.id, students.name, cohorts.name AS cohort_name
FROM students JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
LIMIT $2;
`
, [args[0], args[1]])
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error("query error", err.stack));