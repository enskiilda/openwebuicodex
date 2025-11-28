let legacy_mode_flag = false;
let tracing_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}
export {
  enable_legacy_mode_flag as e,
  legacy_mode_flag as l,
  tracing_mode_flag as t
};
