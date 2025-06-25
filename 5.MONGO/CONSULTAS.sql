--CONSULTAS BASICAS - QUERY (USO DE LA SENTENCIA SELECT)

--SELECT (atributo tabla) FROM NOMBRE TABLA

--seleccionar todos los atributos de las categorias

SELECT * FROM categories;

--seleccionar todos los usuarios que existen en la tabla usuarios
SELECT u.name as nombre, u.email as correo FROM USERS as u;

--FILTROS -- USO DELA SENTENCIA WHERE
--CONSULTAR LAS TAREAS QUE TENGAN EL USUARIO #3
SELECT * FROM USERS as u WHERE u.id = 3;

--consultar usuarios con el nombre que comience con la letra a
SELECT * FROM USERS AS u WHERE u.name LIKE 'A%'

--consultar usuarios con el nombre que finalice con la letra s
SELECT * FROM USERS AS u WHERE u.name LIKE '%sa'

--consultar usuarios con el nombre que finalice con la letra s y comiencen con la letra a
SELECT *
FROM USERS AS u
WHERE
    u.name LIKE '%s'
    AND u.name LIKE 'A%';

-- ENLACES - JOINS (enlaces entre tablas)
-- consultar las tareas y los nombres de las categorias correspondientes
SELECT t.title, t.description, c.name
FROM TASKS AS t, CATEGORIES AS c
WHERE
    t.category_id = c.id;

SELECT t.title, t.description, c.name
FROM TASKS AS t
    INNER JOIN CATEGORIES AS c ON t.category_id = c.id;

--consultar las tareas y los nombres de usuario con nombres de categorias y los estados de las tareas
SELECT T.TITLE, U.NAME, C.NAME, TS.STATUS
FROM
    TASKS T
    JOIN USERS U ON T.USER_ID = U.ID
    JOIN CATEGORIES C ON T.CATEGORY_ID = C.ID
    JOIN TASKS_STATUS TS ON T.STATUS_ID = TS.ID;

--LEFT JOIN: devuelve las filas de la tabla izquierda (TASK) y las coincidencias de la tabla derecha ? -> NULL
--VERIFICA SI TODAS LAS TAREAS CONTINEEN USUARIOS, EN EL CASO QUE NO TRAE NULL
SELECT * FROM TASKS T LEFT JOIN USERS U ON T.USER_ID = U.ID

--RIGTH JOIN: devuelve las filas de la tabla derecha (USERS) y las coincidencias de la tabla derecha ? -> NULL
--TRAE TODOS LOS USUARIOS CON TAREAS, EN EL CASO QUE NO TRAE NULL
SELECT * FROM TASKS T RIGHT JOIN USERS U ON T.USER_ID = U.ID

-- TRAER UNICAMENTE LAS TAREAS QUE NO CONTIENEN USUARIOS
SELECT *
FROM TASKS T
    LEFT JOIN USERS U ON T.USER_ID = U.ID
WHERE
    U.ID IS NULL;

-- TRAER UNICAMENTE LOS USUARIOS QUE NO CONTIENEN TAREAS
SELECT *
FROM TASKS T
    RIGHT JOIN USERS U ON T.USER_ID = U.ID
WHERE
    T.ID IS NULL;

---MOSTRAR USUARIO QUE TENGAN MAS DE DOS TAREAS
SELECT U.NAME AS USERNAME, COUNT(T.ID) AS CANT_TAREAS
FROM USERS U
    JOIN TASKS T ON T.USER_ID = U.ID
GROUP BY
    U.ID
HAVING
    COUNT(T.ID) >= 2

SELECT
    T.TITLE,
    T.DESCRIPTION,
    CASE TS.STATUS
        WHEN 'PENDIENTE' THEN 'La tarea aùn no se ha realizado'
        WHEN 'PROGRESO' THEN 'La tarea està en progreso'
        WHEN 'COMPLETADO' THEN 'la tarea se ha completo'
        ELSE 'LA TAREA NO TIENE ESTADO'
    END AS DESCRIP_ESTADO
FROM TASKS T
    JOIN TASKS_STATUS TS ON T.STATUS_ID = TS.ID