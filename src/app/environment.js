import CONFIG from 'react-native-config';

const skipSimulatorCheck = CONFIG.SIMULATOR_CHECK === 'DISABLED';
console.log('SIMULATOR CHECK is =>', CONFIG.SIMULATOR_CHECK);

export {skipSimulatorCheck};
