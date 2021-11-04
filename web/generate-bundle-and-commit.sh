# This file generates and commits bundled files as part of the mParticle JS SDK ecosystem's release process.

echo '---------- Begin generate latest bundle ----------'
npm run build
git add dist -f
git commit -m 'chore(build): Generate latest bundle [skip ci]'