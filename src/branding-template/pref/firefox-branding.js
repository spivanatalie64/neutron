/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// open links in default browser
pref("network.protocol-handler.external.open", true);
pref("network.protocol-handler.warn-external.open", true);
pref("network.protocol-handler.expose.open", false);

pref("browser.link.open_newwindow", 1);
pref("browser.warnOnQuit", false);
pref("browser.uitour.enabled", false);
pref("browser.privatebrowsing.vpnpromourl", "");
pref("browser.tabs.inTitlebar", 0);

pref("browser.startup.upgradeDialog.enabled", false);
pref("browser.startup.firstrunSkipsHomepage", false);
pref("browser.startup.page",                1);
pref("browser.startup.homepage",            "NEUTRON_APP_URL");

pref("browser.shell.setDefaultPDFHandler", false);
pref("browser.shell.setDefaultBrowserUserChoice", false);
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
pref("default-browser-agent.enabled", false);


pref("browser.urlbar.suggest.bookmark",             false);
pref("browser.urlbar.suggest.history",              false);
pref("browser.urlbar.suggest.openpage",             false);
pref("browser.urlbar.suggest.remotetab",            false);
pref("browser.urlbar.suggest.searches",             false);
pref("browser.urlbar.suggest.topsites",             false);
pref("browser.urlbar.suggest.engines",              false);

pref("xpinstall.signatures.required", false);

// Don't show session restore page
pref("browser.sessionstore.max_tabs_undo", 0);
pref("browser.sessionstore.max_windows_undo", 0);
pref("browser.sessionstore.max_resumed_crashes", 0);
pref("browser.sessionstore.resume_from_crash", false);
pref("browser.sessionstore.collect_session_storage", false);
pref("browser.sessionstore.restore_on_demand", false);
pref("browser.startup.couldRestoreSession.count", -1);

// === DATCRD REFINEMENTS ===

// --- DISCORD VOICE/VIDEO ---
pref("media.peerconnection.enabled", true);
pref("media.getusermedia.browser.enabled", true);
pref("media.getusermedia.screensharing.enabled", true);
pref("media.navigator.permission.disabled", true);
pref("media.autoplay.default", 0);
pref("media.autoplay.blocking_policy", 0);

// --- WEBGL / HARDWARE ACCELERATION ---
pref("webgl.disabled", false);
pref("webgl.force-enabled", true);
pref("layers.acceleration.force-enabled", true);
pref("gfx.webrender.all", true);

// --- NOTIFICATIONS ---
pref("dom.webnotifications.enabled", true);
pref("dom.webnotifications.requireuserinteraction", false);
pref("alerts.useSystemBackend", true);

// --- DISABLE TELEMETRY ---
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.batchPingEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.server", "data:,");

// --- CACHE FOR DISCORD ---
pref("browser.cache.disk.capacity", 512000);
pref("browser.cache.memory.capacity", 65536);

// --- NETWORK ---
pref("network.http.max-connections", 256);
pref("network.http.max-connections-per-server", 64);
pref("network.http.max-persistent-connections-per-server", 16);
pref("network.websocket.max-connections", 200);

// --- DISCORD CAPTCHA / POPUPS ---
pref("dom.disable_open_during_load", false);
pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

// --- STORAGE ---
pref("dom.indexedDB.enabled", true);
pref("dom.storage.default_quota", 2048);

// --- DISABLE POCKET ETC ---
pref("extensions.pocket.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
