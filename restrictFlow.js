var roles = Xrm.Utility.getGlobalContext().userSettings.roles;

var restrictedRole = false;

roles.forEach(function (item) {

    if (item.name.toLowerCase() === "sales department") {

    restrictedRole = true;

}

    });

if (restrictedRole) {

    alert("Restricted Access");

    return;

}