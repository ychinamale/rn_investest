import CONFIG from 'react-native-config';

const skipSimulatorCheck = CONFIG.SIMULATOR_CHECK === 'DISABLED';

export {skipSimulatorCheck};
