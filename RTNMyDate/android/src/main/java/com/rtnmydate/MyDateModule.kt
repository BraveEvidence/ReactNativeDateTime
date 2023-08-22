package com.rtnmydate


import android.os.Build
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import java.text.SimpleDateFormat
import java.time.OffsetDateTime
import java.time.ZoneOffset
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale


class MyDateModule(context: ReactApplicationContext): NativeMyDateSpec(context) {
    override fun getName(): String {
        return NAME
    }

    override fun getNativeDate(date: String?): String {
       return parseDateString(date!!).toString()
    }

    private fun parseDateString(dateString: String): String? {

//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
////            val formatter = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm XXXX'UTC'")
////            val formatter = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm Z'UTC'", Locale.ENGLISH)
////            val formatter = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm Z'UTC'", Locale.ENGLISH)
//            val formatter = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm Z", Locale.ENGLISH)
//
//            return try {
////                val formattedString = dateString.replace("UTC", "+00:00")
////                OffsetDateTime.parse(formattedString, formatter).toString()
////                val zonedDateTime = ZonedDateTime.parse(dateString, formatter)
////                zonedDateTime.toLocalDateTime().toString()
////                val formattedString = dateString.replace("UTC", "+00:00")
////                ZonedDateTime.parse(formattedString, formatter).toString()
//                val parsedDateTime = OffsetDateTime.parse(dateString, formatter)
//                val utcDateTime = parsedDateTime.withOffsetSameInstant(ZoneOffset.UTC)
//                utcDateTime.toString()
//            } catch (e: Exception) {
//                null
//            }
//        } else {
            val inputFormat = SimpleDateFormat("dd MMM yyyy HH:mm Z'UTC'", Locale.ENGLISH)
            return try {
                inputFormat.parse(dateString)?.toString()
            } catch (e: Exception) {
                Log.i("exceptionis ",e.message.toString())
                null
            }
//        }


    }

    companion object {
        const val NAME = "RTNMyDate"
    }
}