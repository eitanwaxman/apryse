instance.UI.addEventListener(instance.UI.Events.VIEWER_LOADED, function() {
    console.log("config working");
    instance.UI.enableFeatures([instance.UI.Feature.ContentEdit]);
})