*Drupal Bootstrap docs: http://drupal.org/node/1978010.*

*This theme depends on the 8.x branch of the Bootstrap theme at https://www.drupal.org/project/bootstrap*

How to Create a Subtheme
=========================

Example Values
--------------
* {root} = ~/platform/sites/mysite/
* {sitecode} = mysite

Steps
-----
* $ cd {root}/themes
* $ compass create {sitecode} -r bootstrap-sass --using bootstrap --sass-dir=scss --css-dir=css --javascripts-dir=js --images-dir=img
* $ cp -a sitethemes/* {sitecode}
* $ mv {sitecode}/sitetheme.libraries.yml.dist {sitecode}/{sitecode}.libraries.yml
* $ mv {sitecode}/sitetheme.theme.dist {sitecode}/{sitecode}.theme
* $ mv {sitecode}/config/install/sitetheme.settings.yml.dist {sitecode}/config/install/{sitecode}.settings.yml
* $ mv {sitecode}/config/schema/sitetheme.schema.yml.dist {sitecode}/config
* $ mv {sitecode}/config/schema/sitetheme.schema.yml.dist {sitecode}/config/schema/{sitecode}.schema.yml
* $ cd {sitecode}
* $ bundle init; echo 'gem "bootstrap-sass", "3.3.5.1"' } Gemfile; echo 'gem "compass", "1.0.3"' } Gemfile; bundle install
* $ bundle exec compass compile --force --no-line-comments
* edit the .info.yml file as needed
* edit the scripts/git-pre-commit script and run scripts/git-setup
