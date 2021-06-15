import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM tblpersonas');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error');
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM tblpersonas WHERE personaId = $1', [id]);
    return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
    const { nombre, paterno, materno, nacimiento, sexo } = req.body;
    const response = await pool.query('INSERT INTO tblpersonas (nombre, paterno, materno, nacimiento, sexo) VALUES ($1, $2, $3, $4, $5)', 
                    [nombre, paterno, materno, nacimiento, sexo]);
    res.json({
        message: 'Usuario Agregado',
        body: {
            user: { nombre, paterno, materno, nacimiento, sexo }
        }
    })
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { nombre, paterno, materno, nacimiento, sexo, personaId } = req.body;

    const response = await pool.query('UPDATE tblpersonas SET nombre = $1, paterno = $2, materno = $3, nacimiento = $4, sexo = $5 WHERE personaId = $6', 
                        [nombre, paterno, materno, nacimiento, sexo, personaId]);
    res.json('Usuario Actualizado');
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [id]);
    res.json(`El usuario ${id} ha sido eliminado`);
};