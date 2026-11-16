package com.bclinnk.cm;

import android.os.Bundle;
import android.webkit.WebView;

import androidx.webkit.WebViewCompat;
import androidx.webkit.WebViewFeature;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashSet;
import java.util.Set;

public class MainActivity extends BridgeActivity {

    private String patchJs = "";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        patchJs = loadAsset("public/app-patch.js");
        if (patchJs.isEmpty() || getBridge() == null) return;

        WebView webView = getBridge().getWebView();

        // 1) Sisipkan sedini mungkin (sebelum halaman dirender, termasuk iframe ota.bookandlink.com)
        if (WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) {
            Set<String> origins = new HashSet<>();
            origins.add("https://cm.bclinnk.com");
            origins.add("https://*.bclinnk.com");
            origins.add("https://ota.bookandlink.com");
            origins.add("https://*.bookandlink.com");
            WebViewCompat.addDocumentStartJavaScript(webView, patchJs, origins);
        }

        // 2) Cadangan: sisipkan setelah halaman selesai dimuat
        getBridge().setWebViewClient(new BridgeWebViewClient(getBridge()) {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                if (url != null && (url.contains("bclinnk.com") || url.contains("bookandlink.com"))) {
                    view.evaluateJavascript(patchJs, null);
                }
            }
        });
    }

    private String loadAsset(String path) {
        try (InputStream in = getAssets().open(path)) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[8192];
            int n;
            while ((n = in.read(buf)) != -1) out.write(buf, 0, n);
            return out.toString(StandardCharsets.UTF_8.name());
        } catch (Exception e) {
            return "";
        }
    }
}
