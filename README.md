# anylist-nest-graphql

Este proyecto es aprendizaje de Nest.js con GraphQL conectado a Base de datos postgres. Se construyó en el curso de udemy [Nest + GraphQL: Evoluciona tus APIs]()

NOTAS: [Curso GraphQL en Nest.js](https://www.notion.so/Curso-GraphQL-en-Nest-js-0b269d976e1549b09af47b5c6abb512c?pvs=4)


## Inicializar proyecto en Dev

1. Clonar el proyecto 
2. Copiar el ```env.template``` y renombrar a ```.env``` y agregar la DB_PASSWORD
3. Ejecutar ```npm install```
4. Levantar la imagen (Con Docker desktop inicializado) ```docker-compose up -d```
5. Levantar el backend de Nest.js ```npm start:dev```
6. Disponible en [localhost:3000/graphql](localhost:3000/graphql)