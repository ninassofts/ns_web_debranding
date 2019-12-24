odoo.define('ns_web_debranding.field_upgrade', function (require) {
"use strict";

    var FormRenderer = require('web.FormRenderer');

    FormRenderer.include({
        _renderTagForm: function (node) {
            var $result = this._super(node);

/*
  Remove following element:

 <div class="col-xs-12 col-md-6 o_setting_box" title="Boost your sales with two kinds of discount programs: promotions and coupon codes. Specific conditions can be set (products, customers, minimum purchase amount, period). Rewards can be discounts (% or amount) or free products.">
  <div class="o_setting_left_pane">
    <div class="o_field_boolean o_field_widget" name="module_sale_coupon">
   </div>
  </div>
<div class="o_setting_right_pane">
  <label class="o_form_label" for="o_field_input_18" data-original-title="" title="" aria-describedby="tooltip822540">Coupons &amp; Promotions
  </label>
  <div class="text-muted" id="sale_coupon">
                  Manage promotion &amp; coupon programs

  </div>
</div>
</div>

*/
            if (this.state && this.state.model === "res.config.settings"){
                // hide enterprise labels with related fields
                $result.find('.o_enterprise_label').parent().parent().parent().hide();
            }
            return $result;
        },
    });

});
