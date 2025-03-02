# tcgplayer_listing_helper
This is a TamperMonkey script that is set to run on the TCGPlayer listing page for sellers. It is just a small collection of shortcuts that allows the user to quickly search for cards and list them with a predefined price floor. I only use it for small to medium collections of near mint cards so it does not do anything other than price the first condition listed on the card's page. My price floor on TCGPlayer is $0.10, and I list all cards above my floor at $0.01 less than market price. Useful for when you have a collection that is not worth presorting and uploading via CSV. I prefer it to scanning cards through the app sometimes. Trying to think up a way to automatically select the card's page if it can be found in multiple sets. Once I figure that out one can effectively list cards without using a mouse.

List of hotkeys:

Ctrl+Alt+A - This will select the search box on the inventory add product page and clear all text in it.

Ctrl+Alt+B - This will take the market price of the card and populate either $0.01 less than it or the price floor of $0.10, then select the related quantity field to enter a quantity.

Ctrl+Alt+C - This clicks the save button on the page to add the card(s) to the seller's inventory.
