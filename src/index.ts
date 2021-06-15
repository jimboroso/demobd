import express, { Application} from 'express';
import indexRoutes from './routes/index';
const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRoutes);

app.listen(4000);
console.log('Puerto del Servidor', 4000);