#!/bin/bash

RAMA=$(git rev-parse --abbrev-ref HEAD)

# Comprueba si hay cambios (staged o unstaged)
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "📝 Hay cambios detectados."
  read -p "👉 Escribe el mensaje para el commit: " MENSAJE

  git add .
  git commit -m "$MENSAJE"
  git push origin "$RAMA"

  echo "✅ Commit '$MENSAJE' subido a '$RAMA'"
else
  echo "🟡 Sin cambios. Haciendo commit vacío..."
  git commit --allow-empty -m "⚙️ Commit vacío para disparar GitHub Actions"
  git push origin "$RAMA"
  echo "✅ Commit vacío subido a '$RAMA'"
fi
