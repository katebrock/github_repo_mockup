var log = $(".repos");
var repoIcons= [];

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
console.log('get requests');

//jQuery selector

var body = $('body')


//jQuery methods (like for ajax)
function processData(data) {
  //process data
}


var repos = function(entries){
  // log.html('<ul></ul>');

  entries.forEach(function(content){
    var time = content.updated_at;

    var header = $('<div class="left"><article><h2><a href="'+ "html_url" +'">'+ content.name +'</a></h2><h3>Updated<time> '+ moment(time).fromNow()+'</time></h3></article></div><div class="right"><a href="stargazers_count"><span class="octicon octicon-star"></span>' + content.stargazers_count+' <a href="forks_count"><span class="octicon octicon-git-branch"></span>' + content.forks_count+'</div>');
    // var time = $('<time>'+ content.updated_at +'</time></article></li>');

    log.append(header);
    // log.append(time);

  });
};


$.get('https://api.github.com/users/katebrock/repos', null, repos);
//
// $.getJSON('https://api.github.com/users/katebrock/repos').done(function(data, status, xhrObject) {
//   console.log(data);
//   //do the work with this data in here
//   processData(data)
// })
$.getJSON('https://api.github.com/users/katebrock').done(function(data, status, xhrObject) {
  console.log(data);
  var avatar= data.avatar_url;
  $(".avatar").attr("src", avatar)
// console.log(data)
  var fullname= data.name;
  $(".name").html(fullname);

  var username= data.login;
  $(".username").html(username);

  var location= data.location;
  $(".location").html(location);

  var followers= data.followers;
  $(".followers").html(followers);

  var collaborators= data.collaborators;
  $(".collaborators").html(collaborators);

  var following= data.following;
  $(".following").html(following);

  var organizations= data.organizations_url;
  $(".organizations").attr("src", organizations);

  processData(data)
})

// text append prepend html
