const BASE_URL = "https://service.glowbiz.ng/api/v1";

const ApiEndPoints = {
  category: "User/user-detail-info",

  // APP DATA
  all_states:'all-states',
  patner_group:'partner-group',
  patner_subgroup:'partner-subgroup',

  // USER
  authenticate: "User/authenticate",
  signup: "User/signup",
  confirm_account: "User/confirmAccount",
};

export { ApiEndPoints, BASE_URL };
