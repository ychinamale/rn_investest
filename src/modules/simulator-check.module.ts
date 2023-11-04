import {useEffect, useState} from 'react';
import {NativeModules} from 'react-native';
import {logger} from '../services/logger';
import {
  SimulatorCheckResponse,
  SimulatorCheckModuleInterface,
} from './simulator-check.module.types';

const {SimulatorCheckModule} = NativeModules as {
  SimulatorCheckModule: SimulatorCheckModuleInterface;
};

function useSimulatorCheck() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSimulator, setIsSimulator] = useState(true);

  useEffect(() => {
    async function checkSimulator() {
      try {
        const response = await SimulatorCheckModule.getIsSimulator();
        if (response === SimulatorCheckResponse.DEVICE) {
          setIsSimulator(false);
        }
        setIsLoading(false);
      } catch (err) {
        logger('checkSimulator()', err);
      }
    }

    checkSimulator();
  }, []);

  const something = 0;

  return {
    something,
    isLoading,
    isSimulator,
  };
}

export {SimulatorCheckModule, useSimulatorCheck};
