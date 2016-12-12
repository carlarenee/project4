BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS watson CASCADE;
DROP TABLE IF EXISTS averages CASCADE;


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

CREATE TABLE averages (
  saved_on DATE REFERENCES watson(saved_on),
  avg_anger VARCHAR,
  avg_disgust VARCHAR,
  avg_fear VARCHAR,
  avg_joy VARCHAR,
  avg_sadness VARCHAR,
  username VARCHAR REFERENCES watson(username)
);

COMMIT;


