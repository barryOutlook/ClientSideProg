window.onload = function () {
    var obj = {name:"Barry", Age: 23}
    var localStore = new StoreRep(true);
    var sessionStore = new StoreRep(false);
    sessionStore.createItem("mol","session");
    localStore.createItem("mol", "local");
    localStore.createItem('num', 2);
    localStore.createItem('on', true);
    localStore.createItem('name', 'pamela');
    localStore.createItem('obj', { 'hello': 12 });
    alert(localStore.readItem('num'));
    alert(localStore.readItem('on'));
    alert(localStore.readItem('name'));
    alert(JSON.stringify(localStore.readItem('obj')));
    localStore.updateItem("name", "Barry");
    alert(localStore.readItem('name'));
    localStore.deleteItem("name");
    alert(localStore.readItem('name'));
    alert(localStore.deleteItem('FISH'));
    alert(localStore.readItem('mol'));
    alert(sessionStore.readItem('mol'));
    createCookie("barryCookie", "barryValue", 1);
    createCookie("SueCookie", "SueValue", 1);
    alert(" barryCookie is " + readCookie("barryCookie"));
    deleteCookie("barryCookie");
    alert(" barryCookie is " + readCookie("barryCookie"));
    updateCookie("SueCookie", "SueNewValue", 1);
    alert("SueCookie is " + readCookie("SueCookie"));
   var result = updateCookie("SueCookie", JSON.stringify(obj), 1);
    var fred = readCookie("SueCookie");
    alert(fred);
}

