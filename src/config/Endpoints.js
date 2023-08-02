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
  change_password:'User/change-password',

  // PARTNER
  create_partner: "Partner/create-partner",
  get_user_accounts: "Partner/user-accounts",
  switch_accounts: "Partner/switch-accounts",
};

export { ApiEndPoints, BASE_URL };
