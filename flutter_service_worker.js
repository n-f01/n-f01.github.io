'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d2c35e1acb396c387937381aa0742733",
".git/config": "a169a4492eaa4c87dfc783650945749a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "53edc08f212788857242a003017bc020",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32c0ba004d0228509d6e64b97912cfb3",
".git/logs/refs/heads/master": "32c0ba004d0228509d6e64b97912cfb3",
".git/logs/refs/remotes/origin/master": "2d2f642fab15f69691d777d6f065468e",
".git/objects/1f/c1227f688e65b4ff6a416ad7cfb8285fe0e356": "c6cd2c6f0ed8e9c214da0f027e31dde7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/42b05d1a40330a9ca23ea43e0aa6fd8519dd66": "eae3fda3c6a9e2238dbe2f69d2f57989",
".git/objects/24/84ba555eb017ed1f91564c70c22e6037fd9b69": "d1abd5e23126d4e62730b266c9a09c1d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/0f79dd6c59a50a878c5c25bbe53df8dbcd2ad6": "cdf8a3bb8e7550e24c2258fe377fd482",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/bfd5c22dc1ee47c69140e728ef8a7df0c9412c": "30f5f6d94bd6d9d4e1cbe9bf8bd07d40",
".git/objects/55/adb33a1a079f716b8fbc4ce767e6ee455f6ea2": "78db67f7ae1400747907c854154495f5",
".git/objects/5e/271480980c4dae88e416e301de2cf1d94fd4ca": "424ac463ce7db1a2ef2a09fbf1af4898",
".git/objects/5f/85c287f7a08265b6ecca52bd1be706fde066b7": "887e49b95bb5de69cfdd6ca4dc7dbbc5",
".git/objects/78/34981d932d5ed829782ae03cc26a899d039a1e": "beafc8c8fd6acac7b83be6fe3b626d16",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/df8c8dd97202c11a735a90d19e5f487706b0f6": "3d004680ebc1f657c1517bb4ebc2276b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3fb45d8226536e0cfe0127dcb1c900a25825cb": "2bfdfd8f927a1e880db822f25ed82d95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/ba9e096c056dd531ce1ff27397c430b2691f8a": "806e273a0488601ba8c750e1bc82680a",
".git/objects/9e/fa07c90b530727e2c262cfafe6fd08f391b9e3": "bd678a9d559247c95e71b529b43ddfff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/80727833871bbcbe9a8e8e34c924bed42093ae": "774e00cadab132e66a8ceac25e633790",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/8fd3cd23b1fe19b914da61dc88db1720412a9e": "2a8f9f55bcaad742e49f872163d7c25f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/2cb7959e8713076aba29c2562ca822727fb55b": "9bce3a3f91afcab20241034077dc9cd7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/55c7f722bd8ee7786638ac8a4de4070aa04c87": "dc8fd02e542b554cb448a47a2ceaf27f",
".git/objects/d3/c2e3ad580a08e26325b6f205adf2ec9888fa99": "d04009a1a2b356cfdedee6325a6b83fb",
".git/objects/dd/fce6a96dafadf45cbcf7a143b53b9aeec43e19": "c1495b3e4c4a6d4d1da13ffd8ec6a3e6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f8/3eaa3d0a14f939c4ec803126054b7fc0b6105e": "12ad4e709570c89c947d80ed97c98b2d",
".git/objects/fc/c6421e0168e108033a5b72c2c548bc922fdb44": "6c12ec9583c2de35c7509d3952c179b9",
".git/refs/heads/master": "dbf04ec36e6c75efc87260b64857e2b0",
".git/refs/remotes/origin/master": "dbf04ec36e6c75efc87260b64857e2b0",
"assets/AssetManifest.json": "111c36cd9849d5c54037501b075adf35",
"assets/assets/logo.png": "18f4c06380b2087c97d32290e86e0237",
"assets/assets/male.png": "72b7182a9780959c2ba6017db50b7fa3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "87288623c5f3f94b79510942be71f661",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "36c5293a166129f59bb889f476294a2b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c0db172066d1f24221c6835d8b219da2",
"/": "c0db172066d1f24221c6835d8b219da2",
"main.dart.js": "021a0039977a89e5ea21523be32b6ea8",
"manifest.json": "9988a96534f24f11e709b36d8b03ae67",
"version.json": "33973c5731c3fdede57092c408015092"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
