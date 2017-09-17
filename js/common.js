var filter = function () {
    var keyWord = document.getElementById('keyWord').value;
    var trs = document.getElementsByTagName('tr');
    for (var i = 1; i < trs.length; i++) {
        var tr = trs[i];
        if (tr.innerText.indexOf(keyWord) === -1) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
};