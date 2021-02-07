import browser from "webextension-polyfill";

class Settings {
  constructor(args) {
    if (!args) {
      args = {};
    }
    this.settings = args.settings || {};
    this.hostSettings = args.hostSettings || {};
  }

  load() {
    return browser.storage.sync
      .get(["settings", "hostSettings"])
      .then((result) => {
        this.settings = result.settings;
        this.hostSettings = result.hostSettings;
        return this;
      });
  }

  get debug() {
    return this.settings.debug;
  }

  get salt() {
    return "salt";
  }

  isEnabled(domain) {
    const url = new URL(domain);
    return url.host in this.hostSettings;
  }

  allowHost(domain, allowance) {
    const url = new URL(domain);
    this.hostSettings[url.host] = allowance;
    return browser.storage.sync.set({ hostSettings: this.hostSettings });
  }
}

export default Settings;