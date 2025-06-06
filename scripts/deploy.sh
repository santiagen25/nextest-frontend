#!/bin/bash

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Hay cambios sin subir. Realizando commit automatico."
  git add .
  git commit -m "Auto commit por deploy.sh"
else
  echo "No hay cambios pendientes."
fi

echo "🚀 Haciendo merge de 'dev' a 'master' y haciendo push..."

git checkout master || exit 1
git merge dev || exit 1
git push origin master || exit 1
git checkout dev || exit 1

echo "✅ ¡Deploy lanzado con éxito!"
