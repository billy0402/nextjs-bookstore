export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start({
      serviceWorker: { url: '/nextjs-bookstore/mockServiceWorker.js' },
    });
  }
}
