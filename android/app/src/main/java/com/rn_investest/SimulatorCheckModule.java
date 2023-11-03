package com.rn_investest;

import android.os.Build;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import android.util.Log;

public class SimulatorCheckModule extends ReactContextBaseJavaModule {
    SimulatorCheckModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "SimulatorCheckModule";
    }

    @ReactMethod
    public void getIsSimulator(Promise promise) {
        boolean isSimulator = (Build.BRAND.toLowerCase().startsWith("generic") && Build.DEVICE.toLowerCase().startsWith("generic"))
                || Build.FINGERPRINT.toLowerCase().startsWith("generic")
                || Build.FINGERPRINT.toLowerCase().startsWith("unknown")
                || Build.HARDWARE.toLowerCase().contains("goldfish")
                || Build.HARDWARE.toLowerCase().contains("ranchu")
                || Build.MODEL.toLowerCase().contains("google_sdk")
                || Build.MODEL.toLowerCase().contains("emulator")
                || Build.MODEL.toLowerCase().contains("android sdk built for x86")
                || Build.MANUFACTURER.toLowerCase().contains("genymotion")
                || Build.PRODUCT.toLowerCase().contains("sdk_google")
                || Build.PRODUCT.toLowerCase().contains("google_sdk")
                || Build.PRODUCT.toLowerCase().contains("sdk")
                || Build.PRODUCT.toLowerCase().contains("sdk_x86")
                || Build.PRODUCT.toLowerCase().contains("sdk_gphone64_arm64")
                || Build.PRODUCT.toLowerCase().contains("vbox86p")
                || Build.PRODUCT.toLowerCase().contains("emulator")
                || Build.PRODUCT.toLowerCase().contains("simulator");

        try {
            Log.d("getIsSimulator", "we got --> " + isSimulator);
            promise.resolve(isSimulator ? "isSimulator" : "isDevice");
        } catch (Exception e) {
            Log.d("getIsSimulator", "we got an error");
            promise.reject("geSimulator error", e);
        }
    }
}