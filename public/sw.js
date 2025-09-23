const CACHE_NAME = 'nw-landscape-v1.0.0';
const STATIC_CACHE_URLS = [
  '/',
  '/services',
  '/projects',
  '/about',
  '/service-areas',
  '/reviews',
  '/resources',
  '/contact',
  '/manifest.json',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-100x100.png'
];

const DYNAMIC_CACHE_NAME = 'nw-landscape-dynamic-v1.0.0';
const IMAGE_CACHE_NAME = 'nw-landscape-images-v1.0.0';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== DYNAMIC_CACHE_NAME && 
              cacheName !== IMAGE_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle different types of requests
  if (url.pathname.startsWith('/_next/static/') || 
      url.pathname.startsWith('/_next/image/')) {
    // Cache Next.js static assets
    event.respondWith(cacheFirst(request, CACHE_NAME));
  } else if (request.destination === 'image') {
    // Cache images with cache-first strategy
    event.respondWith(cacheFirst(request, IMAGE_CACHE_NAME));
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - network first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else {
    // HTML pages - network first with cache fallback
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  }
});

// Cache-first strategy
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache-first strategy failed:', error);
    return new Response('Offline content not available', { 
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Network-first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/') || new Response('Offline', { status: 503 });
    }
    
    return new Response('Offline content not available', { 
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'quote-form-sync') {
    event.waitUntil(syncQuoteForm());
  }
});

async function syncQuoteForm() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingSubmissions = await getPendingSubmissions();
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch('/api/quote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        });
        
        if (response.ok) {
          // Remove from pending submissions
          await removePendingSubmission(submission.id);
        }
      } catch (error) {
        console.error('Failed to sync submission:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notifications (optional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/favicon-192x192.png',
      badge: '/favicon-32x32.png',
      vibrate: [200, 100, 200],
      data: data.data || {},
      actions: [
        {
          action: 'view',
          title: 'View',
          icon: '/favicon-32x32.png'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Helper functions for IndexedDB (simplified)
async function getPendingSubmissions() {
  // Implementation would use IndexedDB to retrieve pending form submissions
  return [];
}

async function removePendingSubmission(id) {
  // Implementation would remove the submission from IndexedDB
  return true;
}