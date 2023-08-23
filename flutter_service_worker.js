'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".git/logs/refs/heads/master": "2b679589f2341b4522439f322ab033fe",
".git/logs/refs/heads/dev": "632a06e8092bcbf5936a5969df711d02",
".git/logs/refs/heads/main": "b2d650050769b1bd1381ea6641a4d6e5",
".git/logs/refs/remotes/origin/dev": "e39194c75ac7a0f14ef10acfd860b10a",
".git/logs/refs/remotes/origin/main": "2566e8b13efafc4e1f40cc377026ed0b",
".git/logs/HEAD": "fe8c54ec1ea31403d8714a17c4abb984",
".git/refs/heads/master": "687dda849214ed247cd4921e112eb772",
".git/refs/heads/dev": "687dda849214ed247cd4921e112eb772",
".git/refs/heads/main": "687dda849214ed247cd4921e112eb772",
".git/refs/remotes/origin/dev": "687dda849214ed247cd4921e112eb772",
".git/refs/remotes/origin/main": "687dda849214ed247cd4921e112eb772",
".git/FETCH_HEAD": "a7d9ce8395a68a87450ade77c3a6f9f9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/ORIG_HEAD": "687dda849214ed247cd4921e112eb772",
".git/index": "b3c250597f5fa8f31cd2d79a73e35965",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/33/81c3494f8de2746a771982470816aab301f655": "224603e6cef685bed451c666bd251b32",
".git/objects/03/27378dc0b315b9b2f1c7cef69b54464a7db426": "ad1f6b67c5cd2570193b16c8f49f301e",
".git/objects/03/3cc98a2e556da6017434855d8a34ec1b65b10a": "b3fc7dce2a6f991f80cf667f4cffcb1c",
".git/objects/03/1717ecfb5b421e35aa11e8c094207518869c66": "15bb644f51f1175f240c2a96ff11615f",
".git/objects/c7/93f890602c0a9380d491d79bc835bcda6478b1": "5f910fdc43d02db476bc2bf2aa49ab6d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/9e/95a5a191f80b83de846a79832d683afb712f90": "cfc935eee19156f23d18474402fb8b81",
".git/objects/5d/142507a3569efd6a522bfd02dd9232db71c8fe": "a87aca66b697935f8e0023cf25eb39f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/62/4b21d965d9851fe722321f1c27494211ac6ee5": "ec7a60e7ca0275c8ed86ce1eee48674c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/07/924778b9743ac38121922ba63ab22fb5dea7cd": "2d1901fc637ba129695c9962c629d6e0",
".git/objects/6d/b38041413ba0ce741d966929b09ecc2d7a1d83": "cff1e6fabfa282942b02a12f267ee12d",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/12/9082294dace2a04b2396def28e5e2a88a45c17": "5f73ceaf934bafcbc3015ba4eb53978b",
".git/objects/69/6daf0da232934d143572c4b9ca2c3395cbc25b": "644ad7f784c2838ecf159b3c8cad195c",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/f7/2753adb9471f08c0ef5efeafaf80868c520b43": "3ed62ceb2536b031f798332659990883",
".git/objects/f7/253253de31db47247373ec7bdbcace1ee09580": "546e4bd2709994a0395be5e2e28a9f8c",
".git/objects/dd/984fc24f83829cc1b886d9884f22c6ea7ff4f3": "28a2ead5d97f9ba51800514867d9402f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b1/b806507cdf7f139ba9b65ccaf036cc4291d4c4": "4b7813d7999bb4fa1edfe798b274d9be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/d204771fd96d2c0017fa7eb67a988308cd9785": "905ce84c1fc5ff5061a72d75ddc6d949",
".git/objects/64/2ab5eba6fc168fd80f95a9e5ea0c8abb45add5": "06ae30eaa4c66061afbeafcf74f744cf",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/1a/b115a9b10c89771930255429a2327d7e1507c2": "09dff0ec1ae91520e3cc2da9a4d1d2ed",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/93/3623e9d074d1e4f0a234821fe48f4368f1fa7c": "1f9c072f4649f19389bb3c26191970e8",
".git/objects/8c/8de649f17c11c136a6deafebc3ea9c5b3d7ed2": "96db34d2ac89cefda05c1e2e6e8337e1",
".git/objects/cd/b8f8322a5429d088e6319acbf3bbe81d7c349f": "41393b1c2bd2169d0f6da64d5855304c",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/63/b0e1558e7b2776a9ee1a7a6adaa3a8a69a2699": "5a3290bb56c21b9f7c48ec8d864ef916",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/a4/b9ff213366af061823627959c944fc93ff7532": "3845b12fd503f0981afbbca965e1e43b",
".git/objects/a4/eb0fb2274dec86211b4e6dc06c20b6738c08bf": "f68cbe1d617bb58d96f816bee25c5f72",
".git/objects/68/c22af6be8e50105a363e6d662d54abe54e7c0a": "f109e561054ef34a01294224b990a054",
".git/objects/db/9192ff46bb6756169ca9704928d8a78a2c9a62": "8a3f2a0721cea79552db3a4aece6fc1b",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/18/e1372c53136c9d5e356e475072216ec4ad2ac3": "b01ab5b9079036978631b8d897dcc3d8",
".git/objects/0f/cc8879832269e8acfe43173daec1c0a8329569": "5f1b484d149f0d83e25d7553f5c6fc8f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/95/6ba69f943e4fca262752af961765960422cc57": "1452c83682a2134551aa61c176da0e68",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/378e794cbff91fa0a259639a6f0b20fc003026": "cc4fc8e7a6650922323cb88a69526ee2",
".git/objects/cb/119f2cf453b94d23186190926e6d2d4eea0f4a": "21fda159644ae24e9f155c2a4ba04b97",
".git/objects/29/9f7712fc9b0eb562888e70b868c38e503b5a9b": "33032e3bd34c82b7289bba83ce65d0f4",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/26/d1254039e3e881627c421f879c4073a7e636ee": "32b43b44c953e0f4ecc3db7610659fce",
".git/objects/1d/bada8dc605733b62268384a93fca6a782cd278": "286a200f797ebacb40b241d1a39527cb",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/ed/0ae173457eb0f89b47cf407e0a6a9ec35b47e7": "7bca3d2fb3a0d6f41ab31a6cf685b451",
".git/objects/bb/bfa94eddeb22d0fc753f34cf3ed7440feb82d2": "a89be12c519611ad2fa5c655a0338730",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/e1/08548bf05f09e26f3f03ad7ee26e7a78cee86b": "8ba06e08bc881ed5a12d24ae56c55cae",
".git/objects/43/2b3bb42dc1c9c19755b82161c070848ac15585": "aa8565bcd73d6920d1923b4dd912424c",
".git/objects/8d/08b6bf0ccf0a42ec9a221239df997f115dd931": "daf131abde97525661c6144167d21547",
".git/objects/38/987d1d8685bbba4c61d31c9097cdea997cea6b": "6ec9778e9d3c3084fe4619dc34acdb93",
".git/objects/38/28d72071c41e9038133437412d66766536b306": "04cfa6ce8523d85da3128d07b41d4dd5",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/b6/396f5cf5dea52fda75fe307f63c36408164e10": "063a9ebbde5dbe0c54f8be24fc6cc4a0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/64366e7a66a1cacdedc25c48e6a5db4ed01306": "f7d105784997124461d824bf7e9ff335",
".git/objects/e4/5cca7b9a941b1a3a751bcefc4699475494e169": "dd735bc54d85bb2160886be65ca0cae7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/75/3ad10c881c59485c526447e0946edf3feb3d37": "e50cc284d1d9c502357247de8c52c8b0",
".git/objects/b0/36f013e5357137bf47f121de397b014ba09632": "6c757fa00f750b25cc03cace4403d185",
".git/objects/94/cec89e472525e016ca84a93ae48de3613609ea": "589eb92fe20f9de302903f988da4c620",
".git/config": "4413557cefe1189b48eb1115cfe7e07e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/images/rocky.png": "e4e9928ecea8e3e03f90e701df0c0ce8",
"assets/assets/images/rocky_1.png": "a178489f4bce0ab1c659ac4d58256a02",
"assets/assets/images/rocky%2520(1).jpg": "57d504e88fad9841707ac104ace20ee5",
"assets/assets/images/quiz_panel.png": "c370ea9039d670e7bf857fe7786655c2",
"assets/assets/logo/gmail.svg": "cd42e042539f5bb9d5f0b3bb2bdfb3e9",
"assets/assets/logo/twitter.svg": "9a35c67b9ac12cd7a8817a11aafdfaec",
"assets/assets/logo/facebook.svg": "51f42ec568eb2bdbc734ad787f2ae037",
"assets/assets/logo/linkedin.svg": "8cc2d3a80c1ebec192c2f29c08333dc6",
"assets/assets/logo/instagram.svg": "56b09463bee2c26a27aebcfa7b9d8a2a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "25165d685ad9a41252ebd72110b5a7b4",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "eb5780cad6cbe11e5d58e5b4e7e820dd",
"assets/NOTICES": "d33266c0f2216e643e166c40ab8b7c07",
"version.json": "9cb61eea4d9f454d6247cce5e81562b9",
"index.html": "fcdc449449c60e4d513c8cb2b76e8474",
"/": "fcdc449449c60e4d513c8cb2b76e8474",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "5f703831c408d78dc85b966cb079e875",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"manifest.json": "ce96bc359cc4307d72065bc6a5b7c316"};
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
