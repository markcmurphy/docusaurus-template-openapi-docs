module.exports = [
  { type: 'doc', id: 'checkouts/checkouts' },
  {
    type: 'category',
    label: 'Checkout',
    link: { type: 'doc', id: 'checkouts/checkout' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/checkouts-by-checkout-id-get',
        label: 'Get a Checkout',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'checkouts/checkouts-by-checkout-id-put',
        label: 'Update Customer Messages',
        className: 'api-method put',
      },
    ],
  },
  {
    type: 'category',
    label: 'Checkout Billing Address',
    link: { type: 'doc', id: 'checkouts/checkout-billing-address' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/checkouts-billing-address-by-checkout-id-post',
        label: 'Add Checkout Billing Address',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id:
          'checkouts/checkouts-billing-address-by-checkout-id-and-address-id-put',
        label: 'Update Checkout Billing Address',
        className: 'api-method put',
      },
    ],
  },
  {
    type: 'category',
    label: 'Checkout Consignments',
    link: { type: 'doc', id: 'checkouts/checkout-consignments' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/checkouts-consignments-by-checkout-id-post',
        label: 'Add Consignment to Checkout',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id:
          'checkouts/checkouts-consignments-by-checkout-id-and-consignment-id-put',
        label: 'Update Checkout Consignment',
        className: 'api-method put',
      },
      {
        type: 'doc',
        id:
          'checkouts/checkouts-consignments-by-checkout-id-and-consignment-id-delete',
        label: 'Delete Checkout Consignment',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'Checkout Coupons',
    link: { type: 'doc', id: 'checkouts/checkout-coupons' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/checkouts-coupons-by-checkout-id-post',
        label: 'Add Coupon to Checkout',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'checkouts/checkouts-coupons-by-checkout-id-and-coupon-code-delete',
        label: 'Delete Checkout Coupon',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'Checkout Discounts',
    link: { type: 'doc', id: 'checkouts/checkout-discounts' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/post-store-hash-v-3-checkouts-checkout-id-discounts',
        label: 'Add Discount to Checkout',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'Checkout Orders',
    link: { type: 'doc', id: 'checkouts/checkout-orders' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/create-an-order',
        label: 'Create an Order',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'Checkout Settings',
    link: { type: 'doc', id: 'checkouts/checkout-settings' },
    items: [
      {
        type: 'doc',
        id: 'checkouts/get-checkout-settings',
        label: 'Get Checkout Settings',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'checkouts/update-checkout-settings',
        label: 'Update Checkout Settings',
        className: 'api-method put',
      },
    ],
  },
];
