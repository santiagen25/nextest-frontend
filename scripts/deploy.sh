#!/bin/bash
echo "🚀 Haciendo merge de 'dev' a 'master' y haciendo push..."

git checkout master || exit 1
git merge dev || exit 1
git push origin master || exit 1
git checkout dev || exit 1

echo "✅ ¡Deploy lanzado con éxito!"
