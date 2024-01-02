import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    if (req.user) {
        const userEmail = req.user.emails && req.user.emails.length > 0 ? req.user.emails[0].value : 'No disponible';
        res.send(`
            <h1>Perfil del Usuario</h1>
            <p>ID: ${req.user.id}</p>
            <p>Nombre: ${req.user.displayName}</p>
            <p>Email: ${userEmail}</p>
            <a href="/auth/logout">Cerrar Sesión</a>
        `);
    } else {
        res.send('No hay usuario autenticado.');
    }
});

export default router;
