'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "30bb52acbf7a3a6b216a3b227ab88a99",
".git/config": "f90c9445d52620549968a4ba8ad48094",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ae035287e3dbd85d3710db01ddf01f99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a560a9d508e52fecc6b5c428aa41b5f7",
".git/logs/refs/heads/main": "699f55d7f9096537b8687564837c56f6",
".git/logs/refs/remotes/origin/main": "9a8583cf5d8ee1bbdc2dbe791dc5afad",
".git/objects/00/0bc9142f6f4bf72c5ddcbcf0f6531b328d039b": "03c227ee5e269948da5206b62e6da444",
".git/objects/00/a3d75d620d61b91cd62d949e0064daa300061e": "f72f44a0a55d98a84df40f10d9bbad23",
".git/objects/09/3d1f20d3c158adba5c5c6b81511d21ee0400bc": "ba1b51ba9bdf0a6d88985836383a91b1",
".git/objects/0f/882255f3ec74f981ce79d937167b77d858451e": "984c1e22e01be2148cdf3fbeb2adbcba",
".git/objects/11/8130c9248e604707ffa90b7af0af152206ca1b": "20dcea82d8c923e54a3b8945a208916c",
".git/objects/1a/e62785e51166f697dcd01d1f82e691bd7a1800": "ee8ddfc5ca1eff421d3e4f63e9126534",
".git/objects/1c/2c81ee0f6b00c6350644cfe93c74d9d635183b": "9df27eb41f2f1cedae237e77eb608cfe",
".git/objects/1c/878047a4346cd7f6e4d76febcb6b6188c5cf45": "87364ebce8f1ad6e339a41721d55b000",
".git/objects/27/e79b3bf9eefb3e377ecf057340cb43a34ed7e3": "30e16688437fcd66184c8f6d4c92fa96",
".git/objects/2e/247125b491221ff988cfcf17bd4b2d656904c2": "9c8e2070f19caf07e9b852b88df23157",
".git/objects/42/fe25571965cb8e27ce9052212b6195ff00746a": "e477f9488643c4fe9ad88b2037355469",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/8797620f41cda1fdde8f5ed07a6fb9579544a4": "0dfd4feeab85a3b99a07e2a21d4b2216",
".git/objects/4e/2ed2ea7f79a985e4751121abd02c79271e257f": "48e4c4df7d992eb6853f378d88278279",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/57/a15fff5fd5bebcc8da09721ee83228a155507d": "82d62144d6c9ad944dd1657a0239503b",
".git/objects/5a/65d4f6fe43934ce0860e82a0f320115b342cc7": "5c9bed1fd0438a8774bf5a875bf82c77",
".git/objects/61/84ca41ced7bb915600773a1918665e19b8e506": "baf9bd2ae3b6e29a1c624996897fe5e7",
".git/objects/64/362d79c83c09291e02626fb2216dc601ff548a": "c257d049b7c00a8093354c8d1684381c",
".git/objects/67/1285b6ed29c1c89694f5e4dba39d045b90282c": "bea63e7aafde807b8df6d79989ac6d4c",
".git/objects/75/4f1a094d423f9185c36d9c82d5519d5857b396": "8b7f663eeb651ff00e9c3d8b90326908",
".git/objects/78/179cc182dfe1514fd8e19b95894bd56c8ce83b": "a79aca56de539a6d99c536d369b3a89a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/30e773e2eea96c85e5aa5886adb94969824b9b": "dddf23256b64c1d33dd06da6be3e5838",
".git/objects/80/0bb92f44662053161b4ace1af871267fd41116": "b4f23da0a4368caf8ee27814952ed60b",
".git/objects/84/0648ce39127365636e63358ccbe40226900dd8": "b78a35768b5912d0c77c05002caef72a",
".git/objects/86/9c8f9b4451f77512994cfd376bc8e20d3cbfa8": "939e74c9f2240b05ab3c33c3e304174c",
".git/objects/87/2d355b1fa4d59b758b884e1634d3a285568fdb": "cbc9f3410facc85d4402340b38d4b0ba",
".git/objects/87/fd07cf4242c931c20d7a9cd04509c1b1739f2f": "0ced4e9c63a9f1cc24784aad0f3dd131",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7f8ce885ff075e2d742d84f79300ad41457236": "501c95b3400c8d9659938971732fe7f6",
".git/objects/90/2e31c6d10aca8ef220c0bf26f3be50191f1c90": "356d2c6b65333cec9be63a10fb18e431",
".git/objects/95/ee8d7ef6dcb3ad8dfaf8148648c2cb6be72c44": "4d0f4e94344aa8e4d818d590497a2c4c",
".git/objects/97/ab9a2118d123bf010ea85a38c3e82d2333b72a": "cc83e129632f759bd5f64117ef91dfe5",
".git/objects/9d/b6ef14a0df02d17ae442737b909784ded81534": "6d406185072c10b9bb8dc8266a822179",
".git/objects/9e/86fcdcfe58fcc670a33e71c1674a5ae727c43b": "d13438239bfd758c8c379433d041f943",
".git/objects/9f/1f86460f8f18b33dd483c493d3fc03ac2bd772": "6aeab350739fb309d1f44419497e4e83",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/caedfa99cba751de91aa5a8ced2e513bb668d4": "c40ae98ded0303992453e98c003a58c8",
".git/objects/a8/a3d48723da31b9a862738db42c0978c6548884": "70a8b26286e2d1da5d1b61b1bc0688f7",
".git/objects/a9/9db3bc6a780eba4a35f0ee005dab8af8be30f6": "ef09897bc7f51e9c1c3072cf6a924201",
".git/objects/b1/ebe12f1ca7a4404fe75652e1082fdec3093e44": "0eaf2830d5b46bb41f949ffe9054eaa7",
".git/objects/b4/04518b218d2f989676c639912b5086b560412c": "ad38052cb6eec6f7ea4389ab225f0de3",
".git/objects/b5/f3cb48737bbd90bec27d7ba3d6e72023b5052c": "51a5a0dc965cfd694c40229a347a0fcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/3b083798df5ba9c52750cb96de7eb800a2a7c7": "c874380a39e365913db0e0f8bb0cb600",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/252db7597e6b09490c94b5e4b95f684ceedb90": "5333e2b84196187b34eb42ad7480117f",
".git/objects/c8/6e6aea6afa4cd3814b5da34faed18d01a81041": "9a0dd46173fa1f1a673c3aa7e3231c92",
".git/objects/c9/2522573e697dd53b78411a2ca3644cc97595ce": "142ace1ddc85f051b651f74b093cad12",
".git/objects/c9/ad35880464b4214299ee52fc35a3f51e27008a": "528921a68faa6252307ee0ee196393e6",
".git/objects/cd/820bf762f1c4d2bc5d643a6cef37bfc941f69b": "be2a80df7f38f986ab5725705a8ef812",
".git/objects/ce/64e5b5b6151b55d90769aae4c837a77fddc903": "c49d141eac4d3a2eacb464f592732d73",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/01221d64104d8496cf130478e1282eb269a177": "bfb118582be740c11327a4992128ddf2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/01ae0d05c308388a6178b643fa25216a3ac933": "4f6883e73b16d48414db8929f6ca8913",
".git/objects/f6/a283f5c351b070dd091a2219cf222ca5cc20d8": "f7b33c8ccf90ed4738e76c9b1bc90133",
".git/objects/f8/c8fef0f8c8aba44a871ff971789b352e9786fb": "af7f5a2a522ec5873650c9e56c7c29d8",
".git/objects/fa/3eebcb5ee8620737ee8d78d435d32daf7fbad1": "204249e7cdc791a0d7db5b06643e2b03",
".git/objects/fc/826a77484674905fe5ecd3c99f2ee2ed531576": "ee82f08da66d24e95894f2b5897dec75",
".git/refs/heads/main": "da9bc7442adb68647d8c4d6f13113bf3",
".git/refs/remotes/origin/main": "da9bc7442adb68647d8c4d6f13113bf3",
"assets/AssetManifest.json": "07a0d35c95561a0c1b5b755f234f8f9f",
"assets/assets/conn.json": "f2f93691747a5528852cb02f07388ba3",
"assets/assets/connect.json": "5935bd3584584e1b2e4b5f826a8f5d07",
"assets/assets/ddd.json": "07c79f666a101f44d10200d28c6bd8ab",
"assets/assets/err.json": "9512db684db5d38d99c46f41d8aa4e40",
"assets/assets/errorxx.json": "b91ce1548c532317d3800ec36c482285",
"assets/assets/failed.png": "0fc58226a4df6f5fbe20aa28d2ded749",
"assets/assets/images/bedroom1.jpg": "ce411809264a3eec59fc9dc0e9cfe82e",
"assets/assets/images/garth.jpg": "91015f52595737c640b3fa6743a2479f",
"assets/assets/images/house1.jpg": "a838f5299568b52597b8c1979a5424ab",
"assets/assets/images/house2.jpg": "ea874dccfa9a97c0e920ac8aaaeffa2a",
"assets/assets/images/logo.svg": "9100ffc5af48dbcbff1529232b54f368",
"assets/assets/images/profile-man.png": "b146629237766bc12e029a58c20bcc49",
"assets/assets/images/tina.jpg": "f46c6f81b9f3c1879c82a7f579cf1187",
"assets/assets/loader1.json": "5342d6ebe6483e6220e11295275b7f7e",
"assets/assets/logo.png": "3783fcb6a5ea45aacc1907b72f6350c3",
"assets/assets/newCon.json": "184bb14ec8745a7052b3792a439afac2",
"assets/assets/nodata.json": "757e7af7ec78258c82dcd57081a51e29",
"assets/assets/nodata.zip": "c3c2f47f7d8402f17dc9b28966c985fc",
"assets/assets/phonie.json": "8bb96700149aa4100b8714e6e920a32b",
"assets/assets/rer.zip": "58afc3ca5a3f4edb7ce7b23dd8e12ddb",
"assets/assets/success.json": "b22eb026084b4e21ec2e5ac35f57b869",
"assets/assets/success.png": "1852e70839c5432f7247b69aa4a2ce43",
"assets/assets/suces.json": "b2778c0f7f147d0322cf00dd7b0c676e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8564aaabc8cbd1519b3b3cd1d6ef14e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_paystack/assets/images/american_express.png": "fac1ed63030230003fa52ee8f98aa8dc",
"assets/packages/flutter_paystack/assets/images/dinners_club.png": "24450426cbb1e5b657356b6cca621956",
"assets/packages/flutter_paystack/assets/images/discover.png": "c3a58509fe14ba54b0ca0ff29ee5619d",
"assets/packages/flutter_paystack/assets/images/dob.png": "33734b76a856e9b07934793d83a14cae",
"assets/packages/flutter_paystack/assets/images/jcb.png": "82658437070a16f35238c2f989a00c2a",
"assets/packages/flutter_paystack/assets/images/mastercard.png": "6aecef820a950ef57140f79e07da916a",
"assets/packages/flutter_paystack/assets/images/otp.png": "99aa2d23b63c65db7565622ce17ef3e9",
"assets/packages/flutter_paystack/assets/images/paystack.png": "0b8db920412edd7d8b40e7e7e01ac439",
"assets/packages/flutter_paystack/assets/images/paystack_icon.png": "5b143d4fa4eb48496adc052b89849025",
"assets/packages/flutter_paystack/assets/images/successful.png": "bd7cfa16ecd2b480ca4875fbf8d6f9e2",
"assets/packages/flutter_paystack/assets/images/verve.png": "d9e7f9a5b6987ec61b7c2d0bd7db1271",
"assets/packages/flutter_paystack/assets/images/visa.png": "a8b02279da904c1f40e041b20cbaf49c",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1123248b75a192c75093c2ad77e2dba",
"/": "f1123248b75a192c75093c2ad77e2dba",
"main.dart.js": "214435638d3a9a77dedefb6b8ac52ba5",
"manifest.json": "8311d842635befa68744c39fe4f35d63",
"paystack_interop.js": "c5f118beac354048339fd0f6db64b817",
"version.json": "a5badbb272fd25b6d8256a4ee52ff8ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
