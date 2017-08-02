var scriptFile=BSMyTubeGetModule.getModule(window.location.href);if(scriptFile){chrome.extension.sendRequest({'action':'addScript','scriptFile':scriptFile});}
