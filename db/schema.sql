BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS watson CASCADE;


CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE watson (
  date TIMESTAMP DEFAULT current_timestamp,
  anger_score VARCHAR NOT NULL DEFAULT 0,
  disgust_score VARCHAR NOT NULL DEFAULT 0,
  fear_score VARCHAR NOT NULL DEFAULT 0,
  joy_score VARCHAR NOT NULL DEFAULT 0,
  sadness_score VARCHAR NOT NULL DEFAULT 0,
  username VARCHAR REFERENCES users(username)
);

COMMIT;


