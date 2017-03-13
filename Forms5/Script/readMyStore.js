window.onload = function () {
    var localStore = new StoreRep(true);
    var sessionStore = new StoreRep(false);
    alert(localStore.readItem('mol'));
    alert(sessionStore.readItem('mol'));
}

