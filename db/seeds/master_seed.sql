DROP DATABASE IF EXISTS popos_db;
CREATE DATABASE popos_db;

USE popos_db;

DROP TABLE IF EXISTS Locations;
DROP TABLE IF EXISTS Images;
DROP TABLE IF EXISTS Get_User;


INSERT INTO Get_User
  ( ,createdAt,updatedAt)
VALUES
  ('Farley', current_timestamp
(),current_timestamp
()),
('Jerome',current_timestamp
(),current_timestamp
());

INSERT INTO cohorts
  (cohort_name,createdAt,updatedAt)
VALUES
  ("general", current_timestamp
(),current_timestamp
()),
("TellmeTellme",current_timestamp
(),current_timestamp
()),
("Farley's Gang",current_timestamp
(),current_timestamp
());

INSERT INTO Images
  (user_name, first_name, last_name, password,createdAt,updatedAt,CohortId)
VALUES
  ("tester1", "hi", "there", "123456", current_timestamp
(),current_timestamp
(),2),
("tester2","hi2","there2","123456",current_timestamp
(),current_timestamp
(),2),
("tester3","hi3","there3","123456",current_timestamp
(),current_timestamp
(),2),
("tester4","hi4","there4","123456",current_timestamp
(),current_timestamp
(),3);

INSERT INTO Locations
  (name, address, description, type,phone_interview,hide)
VALUES
  ("https://angel.co/bolt/jobs/310250-software-engineer-machine-learning", "Software Engineer - Machine Learning", "Bolt", current_timestamp
(),current_timestamp
(),2,0,1),
("https://angel.co/clearbit/jobs/362514-full-stack-software-engineer", "Full-stack software engineer", "Clearbit",current_timestamp
(),current_timestamp
(),3,1,0),
("https://angel.co/joinhouseparty/jobs/185904-backend", "Backend ", "Houseparty" ,current_timestamp
(),current_timestamp
(),3,0,0),
("https://angel.co/fathom-health/jobs/186407-software-engineer-data", "Software Engineer, Data", "Fathom",current_timestamp
(),current_timestamp
(),2,0,0),
("https://angel.co/crew-3/jobs/158070-front-end-developer", "Front-end Developer", "Crew",current_timestamp
(),current_timestamp
(),3,0,0),
("https://angel.co/bolt/jobs/310250-software-engineer-machine-learning", "Software Engineer - Machine Learning", "Bolt",current_timestamp
(),current_timestamp
(),2,0,1),
("https://angel.co/clearbit/jobs/362514-full-stack-software-engineer", "Full-stack software engineer", "Clearbit",current_timestamp
(),current_timestamp
(),4,1,0),
("https://angel.co/joinhouseparty/jobs/185904-backend", "Backend ", "Houseparty" ,current_timestamp
(),current_timestamp
(),4,0,0),
("https://angel.co/fathom-health/jobs/186407-software-engineer-data", "Software Engineer, Data", "Fathom",current_timestamp
(),current_timestamp
(),4,0,0),
("https://angel.co/crew-3/jobs/158070-front-end-developer", "Front-end Developer", "Crew",current_timestamp
(),current_timestamp
(),4,0,0);

update jobs set loc3=0, loc2=1, loc1=0 where id =2;
update jobs set hide=0 where id =1;
-- update jobs set job_link="https://angel.co/bolt/jobs/310250-software-engineer-machine-learning" where id =1;


SELECT *
FROM jobs;
SELECT *
FROM users;
SELECT *
FROM cohorts;
SELECT *
FROM administrators;