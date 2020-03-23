INSERT INTO users (name, email, isadmin, password)
VALUES ($1, $2, false, $3)
RETURNING *;