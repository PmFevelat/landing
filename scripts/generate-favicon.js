const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

// Chemin vers le SVG source
const svgPath = path.join(__dirname, '../public/favicon.svg');
// Chemin de sortie pour le PNG
const pngPath = path.join(__dirname, '../public/favicon.png');
// Chemin de sortie pour l'ICO
const icoPath = path.join(__dirname, '../public/favicon.ico');

// Lire le contenu SVG
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Convertir SVG en PNG avec sharp
sharp(Buffer.from(svgContent))
  .resize(32, 32) // Taille standard pour favicon
  .toFile(pngPath)
  .then(() => {
    console.log('PNG généré avec succès');
    
    // Convertir PNG en ICO (plusieurs tailles)
    sharp(pngPath)
      .resize(16, 16)
      .toBuffer()
      .then(data16 => {
        sharp(pngPath)
          .resize(32, 32)
          .toBuffer()
          .then(data32 => {
            // Écrire le fichier ICO
            fs.writeFileSync(icoPath, Buffer.concat([data16, data32]));
            console.log('ICO généré avec succès');
          });
      });
  })
  .catch(err => {
    console.error('Erreur lors de la génération du favicon:', err);
  }); 