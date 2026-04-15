// Adapted from https://github.com/adazzle/react-data-grid/blob/main/test/setup.ts
if (typeof window !== "undefined") {
  window.ResizeObserver ??= class {
    callback: ResizeObserverCallback

    constructor(callback: ResizeObserverCallback) {
      this.callback = callback
    }

    observe() {
      // No-op: initial grid dimensions are obtained from clientWidth/clientHeight
      // (patched below). The ResizeObserver callback is only needed for
      // subsequent resizes which don't occur in jsdom tests.
    }

    unobserve() {}
    disconnect() {}
  }

  // patch clientWidth/clientHeight to pretend we're rendering DataGrid at 1080p
  Object.defineProperties(HTMLDivElement.prototype, {
    clientWidth: {
      get(this: HTMLDivElement) {
        return this.classList.contains("rdg") ? 1920 : 0
      },
    },
    clientHeight: {
      get(this: HTMLDivElement) {
        return this.classList.contains("rdg") ? 1080 : 0
      },
    },
  })

  Element.prototype.setPointerCapture ??= () => {}
  Element.prototype.scrollIntoView ??= () => {}

  // Chakra UI v2 uses matchMedia for responsive props — jsdom doesn't implement it
  if (!window.matchMedia) {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    })
  }
}

jest.setTimeout(30000)

