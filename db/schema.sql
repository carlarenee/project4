BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS watson CASCADE;


CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  city VARCHAR NOT NULL DEFAULT 'New York',
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE watson (
  saved_on DATE DEFAULT current_date,
  anger_score VARCHAR,
  disgust_score VARCHAR,
  fear_score VARCHAR,
  joy_score VARCHAR,
  sadness_score VARCHAR,
  username VARCHAR REFERENCES users(username)
);

COMMIT;


