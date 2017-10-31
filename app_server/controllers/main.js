module.exports.home = function(req, res){
  res.render('home', {title: 'Home'});
};

module.exports.about = function(req, res){
  res.render('about', {title: 'About'});
};


module.exports.portfolio = function(req, res){
  res.render('portfolio', {title: 'Portfolio'});
};

module.exports.contact = function(req, res){
  res.render('contact', {title: 'Contact'});
};
