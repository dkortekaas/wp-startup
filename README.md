WPStarter
===

Hi. I'm a starter theme called `WPStarter`, if you like. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A custom header implementation in `functions/custom-header.php` just add the code snippet found in the comments of `functions/custom-header.php` to your `header.php` template.
* Custom template tags in `functions/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `functions/template-functions.php` that can improve your theming experience.
* A script at `scripts/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
Note: `.no-sidebar` styles are not automatically loaded.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Full support for `WooCommerce plugin` integration with hooks in `functions/woocommerce.php`, styling override woocommerce.css with product gallery features (zoom, swipe, lightbox) enabled.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started
---------------

If you want to set things up, download `WPStarter` from GitHub. The first thing you want to do is copy the `Theme` directory and change the name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'wpstarter'` (inside single quotations) to capture the text domain.
2. Search for `wpstarter_` to capture all the function names.
3. Search for `Text Domain: wpstarter` in `style.css`.
4. Search for <code>&nbsp;wpstarter</code> (with a space before it) to capture DocBlocks.
5. Search for `wpstarter-` to capture prefixed handles.

OR

1. Search for: `'wpstarter'` and replace with: `'megatherium-is-awesome'`
2. Search for: `wpstarter_` and replace with: `megatherium_is_awesome_`
3. Search for: `Text Domain: wpstarter` and replace with: `Text Domain: megatherium-is-awesome` in `style.css`.
4. Search for: <code>&nbsp;wpstarter</code> and replace with: <code>&nbsp;Megatherium_is_Awesome</code>
5. Search for: `wpstarter-` and replace with: `megatherium-is-awesome-`

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `wpstarter.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
