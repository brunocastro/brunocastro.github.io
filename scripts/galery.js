var apikey ='0FXtgoJQ643HvHFAV5wjCgqoivhKgCHs';
var userid ='DarrinCrescenzi';
var containergalery = 'galery';

    be(apikey)
    .user.projects(userid)
    .then(function success(results) {
        console.log(results);
        beloop (containergalery, results);
    }, function failure(error) {
        console.error('error');
    });

function beloop (container, api) {
    var html="";
    var field="";
    var fields="";
    for (i = 0; i < api.projects.length; i++) {
        html += '<div class="flex-item-galery">'+ 
        '<a href="'+api.projects[i].url+'" target="_blank">'+
        '<img src="'+api.projects[i].covers["404"]+'">'+
        '<h3>'+api.projects[i].name+'</h3>'+
        '<p><small>Categorias: '+api.projects[i].fields.join(', ')+'</small></p>'+
        '<p><span> a '+api.projects[i].stats.appreciations+'</span>'+
        '<span> c '+api.projects[i].stats.comments+'</span>'+
        '<span> v '+api.projects[i].stats.views+'</span></p>'+
        '</a></div>';
    }
    document.getElementById(container).innerHTML = html;
}