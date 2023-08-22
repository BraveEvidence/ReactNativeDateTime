//
//  MyDate.swift
//  rnapp


import Foundation

@objcMembers class MyDate: NSObject {
 
  func getNativeDate(dateString: String) -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "dd MMM yyyy HH:mm ZZZZZ'UTC'"

    if let date = dateFormatter.date(from: dateString) {
      return "\(date)"
    } else {
        return ""
    }
  }
  
}
