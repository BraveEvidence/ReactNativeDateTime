//
//  RTNMyDate.m
//  rnapp


#import <Foundation/Foundation.h>
#import "RTNMyDate.h"
#import "rnapp-Swift.h"

@implementation RTNMyDate
RCT_EXPORT_MODULE()

MyDate *myDate = [[MyDate alloc] init];



- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
(const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeMyDateSpecJSI>(params);
}

- (NSString *)getNativeDate:(NSString *)date {
  NSString *value =[myDate getNativeDateWithDateString:date];
  return value;
}

@end
