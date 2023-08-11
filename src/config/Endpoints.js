const BASE_URL = "https://service.glowbiz.ng/api/v1";

const ApiEndPoints = {
  category: "User/user-detail-info",

  // APP DATA
  all_states: "all-states",
  patner_group: "partner-group",
  patner_subgroup: "partner-subgroup",

  // USER
  authenticate: "User/authenticate",
  signup: "User/signup",
  confirm_account: "User/confirmAccount",
  change_password: "User/change-password",
  get_otp: "User/send-reset-password",
  reset_password: "User/reset-password",

  // PARTNER
  create_partner: "Partner/create-partner",
  create_account: "Partner/create-account",
  get_user_accounts: "Partner/user-accounts",
  switch_accounts: "Partner/switch-accounts",
  all_accounts: "Partner/all-accounts",

  // PRODUCT
  create_product: "Product/create-inventory",
  all_inventory: "Product/all-inventory",
  update_sellingPrice: "Product",
  product_by_id: "Product/product-byid",
  delete_product: "Product/delete-product",

  // CUSTOMER/SUPPLIER MANAGEMENT
  all_suppliers: "CustomerSupplierManagement/all-suppliers",
  all_customers: "CustomerSupplierManagement/all-customers",

  // BOOK-KEEPING MANAGEMENT
  create_book: "Bookkeeping/create-book",
};

export { ApiEndPoints, BASE_URL };
