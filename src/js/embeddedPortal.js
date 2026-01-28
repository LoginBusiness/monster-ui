/**
 * VoiceApps - Topbar Removal Script
 * Version: 1.0.1
 */

(function () {
  function removeTopbar() {
    const topbar = document.querySelector('nav.core-topbar');
    if (topbar) {
      topbar.remove();
      return true;
    }
    return false;
  }

  // try immediately
  if (!removeTopbar()) {
    // observe DOM until it shows
    const observer = new MutationObserver(() => {
      if (removeTopbar()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
