import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/errors";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";

const checkLogin = async (req: Request, res: Response, next: NextFunction) => {
  // 1. Obtener el encabezado de autorización completo (p. ej., "Bearer eyJhbGci...")
  const authHeader = req.headers.authorization; 

  // 2. Verificar que el encabezado exista (Error original: "Token is required")
  if (!authHeader) {
    return next(new ClientError("Token is required", 401)); // Código de estado 401
  }

  // 3. SOLUCIÓN: Separar el prefijo 'Bearer' del token real
  const parts = authHeader.split(' ');
  
  // 4. Verificar el formato: Debe tener dos partes (Bearer y Token)
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return next(new ClientError("Invalid token format", 401));
  }

  // El token real es la segunda parte (índice 1)
  const token = parts[1];

  try {
    // 5. Verificar el token limpio usando la clave secreta
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    
    // 6. Adjuntar el ID de usuario al cuerpo de la solicitud
    // (Importante para que el controlador cree la orden para el usuario correcto)
    req.body.userId = decoded.userId; 

  } catch (error) {
    // Si la verificación falla (por token expirado o firma inválida)
    console.error("JWT Verification Failed:", error); // Para depuración en el servidor
    // Se devuelve "Invalid token"
    return next(new ClientError("Invalid token", 401)); 
  }
  
  console.log("Token Check OK");
  next();
};

export default checkLogin;