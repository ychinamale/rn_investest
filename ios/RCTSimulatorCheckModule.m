#import "RCTSimulatorCheckModule.h"
#import <React/RCTLog.h>

@implementation RCTSimulatorCheckModule

RCT_EXPORT_METHOD(getIsSimulator: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  #if TARGET_OS_SIMULATOR
    NSString * const DeviceMode = @"isSimulator";
  #else
    NSString * const DeviceMode = @"isDevice";
  #endif
  
  resolve(DeviceMode);
  RCTLogInfo(@"isSimulator is => %@", DeviceMode);
}

RCT_EXPORT_MODULE();

@end
