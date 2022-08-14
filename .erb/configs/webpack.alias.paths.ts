const path = require('path');

const aliasPaths = {
  '@shared': path.resolve(__dirname, '../../src/renderer/shared'),
  '@ThemeSwitch': path.resolve(__dirname, '../../src/renderer/ThemeSwitch'),
  '@UserProfile': path.resolve(__dirname, '../../src/renderer/UserProfile'),
};

export default aliasPaths;
