#!/bin/bash

# Obtener la rama actual
RAMA=$(git rev-parse --abbrev-ref HEAD)

# Crear un commit vacío con mensaje personalizado
git commit --allow-empty -m "⚙️ Commit vacío para disparar GitHub Actions"

# Subir a la rama actual
git push origin "$RAMA"

echo "✅ Commit vacío hecho y subido a la rama '$RAMA'"
