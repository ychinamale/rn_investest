import {useEffect, useState} from 'react';
import {NativeModules} from 'react-native';
import {logger} from '../services/logger';
const {SimulatorCheckModule} = NativeModules;

const RESPONSE = {
  SIMULATOR: 'isSimulator',
  DEVICE: 'isDevice',
};

function useSimulatorCheck() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSimulator, setIsSimulator] = useState(true);

  useEffect(() => {
    async function checkSimulator() {
      try {
        const response = await SimulatorCheckModule.getIsSimulator();
        logger('checkSimulator', response);
        if (response === RESPONSE.DEVICE) {
          setIsSimulator(false);
        }
        setIsLoading(false);
      } catch (err) {
        logger('checkSimulator()', err);
      }
    }

    checkSimulator();
  }, []);

  return {
    loading: isLoading,
    isSimulator,
  };
}

export {SimulatorCheckModule, useSimulatorCheck};
