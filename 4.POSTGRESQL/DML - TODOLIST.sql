--DML (LENGUAJE DE MANIPULACION DE DATOS)
-- CRUD => INSERT, SELECT. UPDATE, DELETE


INSERT INTO CATEGORIES(name) VALUES
('Trabajo'),
('Estudio'),
('Hogar'),
('Personal'),
('Salud'),
('Finanzas'),
('Compras');


INSERT INTO USERS(name,email,password) VALUES
('Ana Torres', 'ana@gmail.com',MD5('123')),
('Luis peres', 'luis@gmail.com',MD5('123')),
('Raul mendez', 'raul@gmail.com',MD5('123')),
('Tomas jaramillo', 'tomas@gmail.com',MD5('123'));

INSERT INTO TASKS_STATUS(status) VALUES
('Progreso'),
('Cancelada'),
('Completada');

INSERT INTO TASKS(title,description,category_id,user_id,status_id) VALUES
('Informe mensual','crear informe',15,1,3),
('Estudiar SQL','repasar clases',16,2,3),
('Hacer aseo','hacer aseo',17,2,4),
('Programar','desarrollar backen',18,3,2);

 
DELETE FROM CATEGORIES;
DELETE FROM USERS;
DELETE FROM TASK_STATUS;
DELETE FROM TASKS;

SELECT concat(lower(name), '-') FROM CATEGORIES


UPDATE CATEGORIES SET
name = UPPER(name);

SELECT * FROM USERS

UPDATE USERS SET
password = MD5(CONCAT(name,email))
