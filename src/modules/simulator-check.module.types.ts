export enum SimulatorCheckResponse {
  SIMULATOR = 'isSimulator',
  DEVICE = 'isDevice',
}

export interface SimulatorCheckModuleInterface {
  getIsSimulator: () => Promise<SimulatorCheckResponse>;
}
