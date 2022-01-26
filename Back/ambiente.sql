CREATE DATABASE ufes_sports;
CREATE USER admin WITH PASSWORD 'admin';

--Criação das Tabelas
CREATE TABLE IF NOT EXISTS "user" (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  admin BOOLEAN,

  CONSTRAINT pk_user PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "student" (
  id SERIAL NOT NULL,
  telephone VARCHAR(255),
  registration VARCHAR(255) NOT NULL,
  user_id INT4 NOT NULL,
  
  CONSTRAINT pk_student PRIMARY KEY (id),
  CONSTRAINT fk_student_user FOREIGN KEY (user_id) 
    REFERENCES public.user(id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE  
);

CREATE TABLE IF NOT EXISTS "sport" (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  
  CONSTRAINT pk_sport PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "event" (
  id SERIAL NOT NULL,
  title VARCHAR(255) NOT NULL,
  date_of_the_event TIMESTAMPTZ NOT NULL,
  location VARCHAR(255) NOT NULL,
  minimum_number_of_participants INT,
  maximum_number_of_participants INT,
  currently_enrolled INT,
  sport_id INT4 NOT NULL,

  CONSTRAINT pk_event PRIMARY KEY (id),
  CONSTRAINT fk_event_sport FOREIGN KEY (sport_id) 
    REFERENCES public.sport(id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "event_has_students" (
  id SERIAL NOT NULL,
  event_id INT4 NOT NULL,
  student_id INT4 NOT NULL,

  CONSTRAINT pk_event_has_students PRIMARY KEY (id),
  CONSTRAINT fk_event_has_students_event FOREIGN KEY (event_id) 
    REFERENCES public.event(id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_event_has_students_student FOREIGN KEY (student_id) 
    REFERENCES public.student(id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE
);

GRANT ALL PRIVILEGES ON DATABASE ufes_sports to admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO admin;
