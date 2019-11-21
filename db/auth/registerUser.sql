INSERT INTO users (name, email, isadmin, password)
VALUES ($1, $2, true, $3)
RETURNING *;