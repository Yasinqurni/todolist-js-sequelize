-- migrate:up
CREATE TABLE IF NOT EXISTS todolist (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tags VARCHAR(26) NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ,
  deleted_at TIMESTAMP NULL 
);

-- migrate:down
DROP TABLE todolist;

