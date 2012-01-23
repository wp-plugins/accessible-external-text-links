=== Accessible External Text Links ===
Contributors: Myshock
Donate link: 
Tags: accessibility, links
Requires at least: 3.3.1
Tested up to: 3.3.1
Stable tag: 1.0

I created this plugin to make external text links more accessible to people with disabilities

== Description ==

I created this plugin to make external text links more accessible to people with disabilities
by displaying an image with an alternative that informs the user that the link will open in a new window.

== Installation ==

1. Upload `accessible_external_links` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go into the admin panel of the plugin and fill the 'Image alternative text (alt attribute content)' field with the alternative you fish to display default : "Opens in a new window" 
4. add a class of "external" on the links you wish to open in a new window. 

For example use `<a class='external' href='your link url'>My Link</a>`

if you encounter some problems with icon positionning you can add a class of :
a .external img{} in your theme style.css file to control the image positionning

== Frequently Asked Questions ==

= Does it works with ie6 =
Actually not, and it's not planned for the moment.

== Changelog ==

= 1.0 [2012-01-22] =
* Initial release

