
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express2' });
};

exports.create = function(req,res){
  res.render('create', {title : 'Create Tracker'})
}

exports.update = function(req,res){
  res.render('update', { title: 'Update Tracker' } )
}
