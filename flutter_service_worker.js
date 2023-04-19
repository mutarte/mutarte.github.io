'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c3fc4c6622367da1ece3744f5638b700",
"assets/AssetManifest.json": "465b89c2a6cb24f4e49f3fbca7616e16",
"assets/assets/cygor/cygor1/atras.jpg": "c1249135724fa2b3d392869b0d4347bc",
"assets/assets/cygor/cygor1/derecha.jpg": "73708ef3a5bb4cdbeb64e65a32e55dff",
"assets/assets/cygor/cygor1/derecha_atras.jpg": "efc05018d79dc5d6999361e9b2f1b0c1",
"assets/assets/cygor/cygor1/diagonal_derecha.jpg": "b6875bda0613a9141c66206c419ddbab",
"assets/assets/cygor/cygor1/frente.jpg": "792af15cf345b20d937bd58f0711581b",
"assets/assets/cygor/cygor1/frente.png": "21a3051fea299df823b66550bc41a32b",
"assets/assets/cygor/cygor1/izquierda.jpg": "3eaebc13c975f53287436f1d8f0a2491",
"assets/assets/cygor/cygor1/izquierda_atras.jpg": "6fefe4afc100f56b3c1fa721fedfbafc",
"assets/assets/cygor/cygor2/atras.jpg": "08efadf931025ee663d2d8af76a0b21d",
"assets/assets/cygor/cygor2/atras2.jpg": "cab8e61507246f0ec676aaa0c10d704e",
"assets/assets/cygor/cygor2/atras_izquierda.jpg": "a9da47854964ae87732b28c1057c483b",
"assets/assets/cygor/cygor2/derecha.jpg": "a01a2b79bb10e7ba0e0d59c354280073",
"assets/assets/cygor/cygor2/derecha_atras.jpg": "0d6b6517a5fb98cdb3efdd0325016536",
"assets/assets/cygor/cygor2/derecha_diagonal.jpg": "6637577e7e490ab07411901695765183",
"assets/assets/cygor/cygor2/frente.jpg": "c8b2ab5fa6683eabdb24158deaadd134",
"assets/assets/cygor/cygor2/izquierda.jpg": "a9787261cad5d00fd423c2d0c68a99cc",
"assets/assets/cygor/cygor2/izquierda_diagonal.jpg": "8f2e096ffb48de8de23155b49137965d",
"assets/assets/cygor/cygor3/derecha.jpg": "de033c9c2ce2b3faa7e31341e75dbcfc",
"assets/assets/cygor/cygor3/derecha2.jpg": "90fde703e0c826acea30b44dbf8af4c1",
"assets/assets/cygor/cygor3/derecha_atras.jpg": "8ed584b1cd749fd46145b51da948f96e",
"assets/assets/cygor/cygor3/derecha_diagonal.jpg": "76b93b84df79e1efbf60c9a39613626d",
"assets/assets/cygor/cygor3/derecha_diagonal2.jpg": "0b637ae614c49efac05f792390150841",
"assets/assets/cygor/cygor3/frente.jpg": "fec6763c4678a6038d5a23397cd0b3b8",
"assets/assets/cygor/cygor3/frente2.jpg": "c40ef8f0b66867bda34d6f56908833b0",
"assets/assets/cygor/cygor3/izquierda.jpg": "ba6731ba3d0489dbdcdab7edd843e174",
"assets/assets/cygor/cygor3/izquierda_atras.jpg": "1be6eaa1d8088d373832a72fb144c1a8",
"assets/assets/cygor/cygor3/izquierda_diagonal.jpg": "6983a92aa73e0d9d45b05c8c4be852c9",
"assets/assets/cygor/cygor3/izquierda_diagonal2.jpg": "0f5e198c796a9bc4c76653bd526bb609",
"assets/assets/gecoboy/gecoboy1/atras.jpg": "7d03b24c1b9c4c2a7abab0dbcbaf3b3a",
"assets/assets/gecoboy/gecoboy1/derecha.jpg": "8928e3dc2a3756c1d6b6214cc0f97c3d",
"assets/assets/gecoboy/gecoboy1/derecha_diagonal.jpg": "7d272777c81bd681cb8c3e8bff1bb450",
"assets/assets/gecoboy/gecoboy1/frente.jpg": "e4632c8235a3f67f3d38e7016f0fb4a8",
"assets/assets/gecoboy/gecoboy1/izquierda.jpg": "0f3078e50076cb274ade49fcc5bc79cf",
"assets/assets/gecoboy/gecoboy1/izquirda_diagonal.jpg": "c2293a95d70470f917775cd8fc1d59c5",
"assets/assets/gecoboy/gecoboy2/atras.jpg": "756fb8f0d66b6f3aef56c7b7c8366ceb",
"assets/assets/gecoboy/gecoboy2/derecha.jpg": "23ffdbb845dd244950bd8f5c06deb0ed",
"assets/assets/gecoboy/gecoboy2/derecha_diagonal.jpg": "a20195bbe50f7ef95a46c008d3c8f948",
"assets/assets/gecoboy/gecoboy2/frente.jpg": "825d5a48261e6696b6ed21aa01040ec7",
"assets/assets/gecoboy/gecoboy2/izquierda.jpg": "31a4d8c38fef5fdc938a0666e3b8df0b",
"assets/assets/gecoboy/gecoboy2/izquierda_diagonal.jpg": "a67d0484ad9ca9a27a80f8b0f55aced3",
"assets/assets/gecoboy/gecoboy3/atras.jpg": "d892a60b34abbb628d6d5b0cf2bc9bac",
"assets/assets/gecoboy/gecoboy3/derecha.jpg": "e09992d279b14c0417a05fd06911fb2a",
"assets/assets/gecoboy/gecoboy3/derecha_diagonal.jpg": "f2ebc11da0000e390ebf18f815ae05fa",
"assets/assets/gecoboy/gecoboy3/derecha_diagonal2.jpg": "b29c82a673096e4aaff03a2ff0fed6c7",
"assets/assets/gecoboy/gecoboy3/frente.jpg": "501c6e42c9c501d0a64eb6e5f01577a2",
"assets/assets/gecoboy/gecoboy3/izquieda.jpg": "8852365a7104fc5781051601f90b3ffb",
"assets/assets/gecoboy/gecoboy3/izquieda_diagonal.jpg": "5e7a2c12eb7f2a561d577ce841b196f9",
"assets/assets/gecoboy/gecoboy4/atras.jpg": "c6a95c14ffc70860757571a3bd7e58ca",
"assets/assets/gecoboy/gecoboy4/derecha.jpg": "848a73410433e42e7fb26e9c8a257126",
"assets/assets/gecoboy/gecoboy4/derecha_diagonal.jpg": "e684765abda57c998f8afd7ce92e1b6f",
"assets/assets/gecoboy/gecoboy4/frente.jpg": "b8acb188bc82dfe3311ff9e90fe85e59",
"assets/assets/gecoboy/gecoboy4/izquieda_diagonal.jpg": "724359f5e25e904c9edccfac7e2c4db7",
"assets/assets/gecoboy/gecoboy4/izquierda.jpg": "100f9fe2222c270a65ddf2d157b50d93",
"assets/assets/gecoboy/gecoboy5/atras.jpg": "607ae859f97e190fe12a61cbf1882015",
"assets/assets/gecoboy/gecoboy5/atras2.jpg": "36046ccda4f91a68f7a3f6da550421e2",
"assets/assets/gecoboy/gecoboy5/derecha.jpg": "95b02abf4718a7465d03c4cb93b0adc7",
"assets/assets/gecoboy/gecoboy5/derecha_diagonal.jpg": "9642045061816b379a361ccb97b750c0",
"assets/assets/gecoboy/gecoboy5/frente.jpg": "d27aba245d70d6f8a8823e31efe43e94",
"assets/assets/gecoboy/gecoboy5/izquierda.jpg": "ff2910fa21f13581156b2f5f1bb7e377",
"assets/assets/gecoboy/gecoboy5/izquierda_diagonal.jpg": "cfe3f8fb5a5471375ea5a71001f3d8ef",
"assets/assets/logo/logo.jpg": "0a7ad2b52e764289d22bc919e36920ad",
"assets/FontManifest.json": "e25c505507e2d3ccf9188f95147c58df",
"assets/fonts/MaterialIcons-Regular.otf": "316d27f86d4be4f2a422d8f55f90cbb2",
"assets/NOTICES": "09b80225d9b424e6dafdb6835dafd0aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "8a27c70cfc3542d6232ff272f8eef5c4",
"canvaskit/canvaskit.wasm": "ee371a7bb9e06e8b850102d886d6847d",
"canvaskit/chromium/canvaskit.js": "945860162d0f411557ebceae7ffd4e6e",
"canvaskit/chromium/canvaskit.wasm": "15630948751b4e30e66735a0f3bfa88b",
"canvaskit/skwasm.js": "11a044d7e1b6b06f621227aa0636df04",
"canvaskit/skwasm.wasm": "c81676d50211237f3fbd09a89c89addb",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6f8971d8be267cb1f23631ba62e48af6",
"/": "6f8971d8be267cb1f23631ba62e48af6",
"main.dart.js": "e95220bb8172d0c6759f90db18a69ee4",
"manifest.json": "9ca90ed5790f7be754a30e5626160418",
"version.json": "6a787a04e5d6c32d2d9211b014e378f8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
