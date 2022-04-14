'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3199ca3af646643a9d81d4579d39626b",
".git/config": "a169a4492eaa4c87dfc783650945749a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "9e816c3c00d103e210945fbac12bf368",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a970eda8f1231c1f115937b416559d6",
".git/logs/refs/heads/master": "1a970eda8f1231c1f115937b416559d6",
".git/logs/refs/remotes/origin/master": "d55f108ff6331e67ebfc1776a665043c",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/12/dc2091fd4e01666273759beb9b15fbf1edb626": "3a9430f078eb4a14d37816e72326589b",
".git/objects/1c/7d845f8c26ad1d06dff68febf52aad89255c8c": "d34db3bfa6328890dcf6fe724b0c2114",
".git/objects/1f/c1227f688e65b4ff6a416ad7cfb8285fe0e356": "c6cd2c6f0ed8e9c214da0f027e31dde7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/42b05d1a40330a9ca23ea43e0aa6fd8519dd66": "eae3fda3c6a9e2238dbe2f69d2f57989",
".git/objects/24/84ba555eb017ed1f91564c70c22e6037fd9b69": "d1abd5e23126d4e62730b266c9a09c1d",
".git/objects/2c/9281103f03a487e1406b2965e383b87ccf3108": "a3c69593ab2254e58a465c11f748cf30",
".git/objects/30/cac0ff2386f1c39413367da5800c87c0583f08": "dbf53f7b6609ace2aa69558a79cb604b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/342f216c3d1fc7d73638c266e041f7a0fafe6a": "a3f5734f869a64a15d0753866708a817",
".git/objects/37/b1655949131ea319242195f7d86d58c5e52321": "6981301277297738acfcb1b243a4fe02",
".git/objects/38/0f79dd6c59a50a878c5c25bbe53df8dbcd2ad6": "cdf8a3bb8e7550e24c2258fe377fd482",
".git/objects/3b/dded0810d8d88fd53b9ae7b0fa9b4e09e6265a": "1f8c4a1cac4f13ff37c9de0abaad369d",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/42/55557aa1ceeea433ec2ae04cf3f89be5b0b227": "0a0379b922f194f6fbd8455fd18262c4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c56da007ac7486053a74c323ed43c09f0a983e": "f320a7dc7a716060dcb05285f9b6551d",
".git/objects/50/403dbcb4dee3b3e88f5810fc6a0b1c0dc21233": "0cbbae8ea757f023051f586eccb2cd14",
".git/objects/50/bfd5c22dc1ee47c69140e728ef8a7df0c9412c": "30f5f6d94bd6d9d4e1cbe9bf8bd07d40",
".git/objects/55/adb33a1a079f716b8fbc4ce767e6ee455f6ea2": "78db67f7ae1400747907c854154495f5",
".git/objects/5b/44db066035bb9a9d75eeedb9e8c129846b27f6": "d9ff797e55f2902c8822c404cf22cc17",
".git/objects/5e/271480980c4dae88e416e301de2cf1d94fd4ca": "424ac463ce7db1a2ef2a09fbf1af4898",
".git/objects/5f/85c287f7a08265b6ecca52bd1be706fde066b7": "887e49b95bb5de69cfdd6ca4dc7dbbc5",
".git/objects/63/1be23e67215bfa1bc73867780eb824dcc43c6d": "b8558c5120c1ff34d8a725059fd7a09c",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6a/f75af9c64bcef28f117ed22f53f8ead3e6660a": "1637bdffbce100fd5ff4c9f7db68a5e5",
".git/objects/78/34981d932d5ed829782ae03cc26a899d039a1e": "beafc8c8fd6acac7b83be6fe3b626d16",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/df8c8dd97202c11a735a90d19e5f487706b0f6": "3d004680ebc1f657c1517bb4ebc2276b",
".git/objects/80/8df0a1caa84e2fb917fd4759053a6a37800580": "a80bdfe87ab60aa6531cfd98136d21e8",
".git/objects/81/f63ed480054045e9ae7267dfb83bc619a1a9c0": "da30dc4d327930ffcfa6a39b96d77b22",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3fb45d8226536e0cfe0127dcb1c900a25825cb": "2bfdfd8f927a1e880db822f25ed82d95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/26565dfec53c6cf25f525bbcd86c79bd72eaf1": "31916e92b47db60b5afd7123cba895a8",
".git/objects/91/ba9e096c056dd531ce1ff27397c430b2691f8a": "806e273a0488601ba8c750e1bc82680a",
".git/objects/9d/cec531bdb1bf96729796f0cce2eece70905434": "c4e923ca7b48866b5c18ee6e4259bfa4",
".git/objects/9e/fa07c90b530727e2c262cfafe6fd08f391b9e3": "bd678a9d559247c95e71b529b43ddfff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/80727833871bbcbe9a8e8e34c924bed42093ae": "774e00cadab132e66a8ceac25e633790",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/8fd3cd23b1fe19b914da61dc88db1720412a9e": "2a8f9f55bcaad742e49f872163d7c25f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b0/2cb7959e8713076aba29c2562ca822727fb55b": "9bce3a3f91afcab20241034077dc9cd7",
".git/objects/b6/c4b54bf2700bb00151eeb9c380f467e56ced93": "34e69bda17dbe11bf56dd8339632cbe6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/55c7f722bd8ee7786638ac8a4de4070aa04c87": "dc8fd02e542b554cb448a47a2ceaf27f",
".git/objects/be/0e957bd495952e25b4d5c31956dfa9b1f806c4": "bc90bdec7ac368e2c9ca2f2ef3b6eb0e",
".git/objects/d3/c2e3ad580a08e26325b6f205adf2ec9888fa99": "d04009a1a2b356cfdedee6325a6b83fb",
".git/objects/dd/fce6a96dafadf45cbcf7a143b53b9aeec43e19": "c1495b3e4c4a6d4d1da13ffd8ec6a3e6",
".git/objects/df/90558774df92a09f94eb5d017eb4af519427e5": "839a9dc75c6b9d4c13ad0ea9427526ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/b9f7002f55145605153599cf9e0c92aadebc76": "0c2e3bc1798681ccf5b6bee53f05a2c3",
".git/objects/eb/8d5eef89ea41f5a9fdb5f8bd49eda0d9d272cf": "c030a6d93085835384e90e3479f255f1",
".git/objects/f8/3eaa3d0a14f939c4ec803126054b7fc0b6105e": "12ad4e709570c89c947d80ed97c98b2d",
".git/objects/fb/aeb379d905ef53464ef3a09378e550b05429d6": "bd519544904cf8937ec0ced1de0a4202",
".git/objects/fc/c6421e0168e108033a5b72c2c548bc922fdb44": "6c12ec9583c2de35c7509d3952c179b9",
".git/refs/heads/master": "e38501cf6d1708afbad110b080295ee7",
".git/refs/remotes/origin/master": "e38501cf6d1708afbad110b080295ee7",
"assets/AssetManifest.json": "111c36cd9849d5c54037501b075adf35",
"assets/assets/logo.png": "18f4c06380b2087c97d32290e86e0237",
"assets/assets/male.png": "72b7182a9780959c2ba6017db50b7fa3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3896a952134aa9781597e22eb56026a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.ico": "36c5293a166129f59bb889f476294a2b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ff6b67e9109be2593dadc3a6fc6fe738",
"/": "ff6b67e9109be2593dadc3a6fc6fe738",
"main.dart.js": "93c12b52064f3964e7c7e828ca64c263",
"manifest.json": "9988a96534f24f11e709b36d8b03ae67",
"version.json": "33b869b4c47f95379e44b276f44698ea"
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
