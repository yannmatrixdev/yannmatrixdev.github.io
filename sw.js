self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/css/main.css",
                "./src/css/fonts/font0.ttf",
                "./src/css/fonts/font1.ttf",
                "./src/img/icon_01.png",
                "./src/img/icon_02.png",
                "./src/img/icon_03.png",
                "./src/img/icon_out.png",
                "./src/img/icon-1x.png",
                "./src/img/icon-2x.png",
                "./src/img/icon.png",
                "./src/script/index.js",
                "./src/script/worker.js"
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})