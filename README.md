# TaskFlow Backend

API REST para una aplicación fullstack de gestión de tareas.

Permite crear, consultar, editar, completar y eliminar tareas almacenadas en MongoDB.

---

## Tecnologías

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

## Instalación

Clona el repositorio y ejecuta:

```bash

npm install

Configuración

Crea un archivo .env en la raíz basado en .env.example:

PORT=3000
MONGO_URI=tu_uri_de_mongodb

Ejecución

node index.js

Servidor disponible en:

http://localhost:3000

Endpoints

Obtener todas las tareas
GET /api/tasks

Obtener una tarea por ID
GET /api/tasks/:id

Crear una tarea
POST /api/tasks

Body de ejemplo:

{
  "title": "Estudiar React",
  "description": "Repasar hooks",
  "priority": "high",
  "category": "study",
  "dueDate": "2026-11-07"
}

Editar una tarea
PUT /api/tasks/:id

Marcar como completada o pendiente
PATCH /api/tasks/:id/completed

Eliminar una tarea
DELETE /api/tasks/:id

Estructura del proyecto

back/
├── config/
├── controllers/
├── models/
├── routes/
├── .env
├── index.js
├── package.json

Ejemplo de tarea:

{
  "_id": "...",
  "title": "Estudiar",
  "description": "Repasar React",
  "priority": "high",
  "category": "study",
  "dueDate": "2026-11-07",
  "completed": false
}

Despliegue

Este backend está preparado para desplegarse en servicios como:

Render
Railway
Autor

Marc