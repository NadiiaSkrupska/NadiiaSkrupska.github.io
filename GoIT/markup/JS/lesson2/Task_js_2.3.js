/**
 * Created by Edward on 05.10.2015.
 */

var login = prompt('Enter Your Login:', '');

if (login == 'admin') {
    var password = prompt('Enter Your Password', '');
    if (password == 'passw0rd') alert('Welcome home!');
    else if (password == null) alert('Canceled');
    else alert('Wrong password!');
}
else if (login == null) {
    alert('Canceled');
}
else {
    alert('Access denied');
}

