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
    SELECT
    teachers.name AS teacher,
    cohorts.name AS cohort
  FROM
    assistance_requests
    JOIN teachers ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON cohort_id = cohorts.id
  WHERE
    cohorts.name = $1
  GROUP BY
    cohorts.name,
    teachers.name;
`
, [args[0]])
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error("query error", err.stack));