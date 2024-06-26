SELECT
  cohorts.name AS cohort,
  SUM(completed_at - started_at) as total_duration
FROM
  assistance_requests
  JOIN students ON student_id = students.id
  JOIN cohorts on cohort_id = cohorts.id
GROUP BY
  cohort
ORDER BY total_duration;