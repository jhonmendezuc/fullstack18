--DDL (LENGUAJE DE DEFINICION DE DATOS)

CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    PRIMARY KEY ("id")
);

CREATE TABLE "users" (
    id SERIAL NOT NULL,
    name VARCHAR(100),
    email VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "tasks_status" (
    "id" SERIAL NOT NULL,
    status VARCHAR(50) NOT NULL CHECK (
        status IN (
            'Pendiente',
            'Progreso',
            'Cancelada',
            'Completada'
        )
    ),
    PRIMARY KEY ("id")
);

CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "category_id" INTEGER,
    "user_id" INTEGER,
    "status_id" INTEGER,
    PRIMARY KEY ("id"),
    FOREIGN KEY (category_id) REFERENCES CATEGORIES (id),
    FOREIGN KEY (user_id) REFERENCES USERS (id),
    FOREIGN KEY (status_id) REFERENCES TASKS_STATUS (id)
);

--primero las tablas dependientes para eliminacion
DROP TABLE TASKS;

DROP TABLE CATEGORIES;

DROP TABLE USERS;

DROP TABLE TASKS_STATUS;