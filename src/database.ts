import { Pool } from 'pg';

export const pool = new Pool({
    user: 'zkrbvasxlhpunb',
    host: 'ec2-34-200-94-86.compute-1.amazonaws.com',
    password: '2cdc3425e69e17b1802af72845a6c7cf5f7c4eb15a98b238a5112ae6e980c875',
    database: 'db0l3vhpg8qmhh',
    port: 5432
});