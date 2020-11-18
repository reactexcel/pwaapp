let cacheData = "pwaAppData";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "static/js/main.chunk.js",
        "index.html",
        "/addpicture",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          //we return here cached url

          return result;
        }
        let requestUrl = event.request.clone();

        return fetch(requestUrl);
      })
    );
  }
});
