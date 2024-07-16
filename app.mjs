import express from 'express';
import dotenv from 'dotenv';
import blog from './routes/blog.mjs';
import SwaggerDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
const port = process.env.PORT;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Api',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.mjs'], // Adjust this path to match your directory structure
};

const openapiSpecification = SwaggerDoc(options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/blogs', blog);
// app.use('/api/products', product);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
