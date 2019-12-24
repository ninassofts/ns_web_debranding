====================
 Backend debranding
====================

Installation
============

* `Install <https://odoo-development.readthedocs.io/en/latest/odoo/usage/install-module.html>`__ this module in a usual way

Configuration
=============

By default the module replaces ``Odoo`` to ``Software``.

* Switch to Developer mode
* Open ``[[ General Settings ]] >> Technical >> Parameters >> System Parameters`` and modify:

  * ``web_debranding.new_title`` (put space in *Value field* if you don't need Brand in Title)
  * ``web_debranding.new_name`` (your Brand)
  * ``web_debranding.new_website`` (your website)
  * ``web_debranding.new_documentation_website`` (website with documentation instead of official one)
  * ``web_debranding.favicon_url``
  * ``web_debranding.send_publisher_warranty_url`` - set 0 to disable server requests to odoo.com and 1 otherwise (useful for enterprise contractors). Works only for non-enterprise versions of odoo, check `note <https://www.odoo.com/apps/modules/13.0/web_debranding/#enterprise-users-notice>`__ below.
  * ``web_debranding.icon_url`` - icon for mobile devices *recommended size :192x192*
  * ``web_debranding.apple_touch_icon_url`` - icon for IOS Safari *recommended size :152x152*


* Open *Backend*
* Perform usual workflow

RESULT: No more reference to `Odoo <https://www.odoo.com/>`__. *Possible exceptions may be Mails.*
