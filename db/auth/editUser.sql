update users
set 
name = $1,
email = $2
where user_id = $3;

SELECT * from users
where user_id = $3;