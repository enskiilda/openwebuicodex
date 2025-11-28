import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
const getAdminDetails = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/details`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getAdminConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateAdminConfig = async (token, body) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getSessionUser = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    credentials: "include"
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const ldapUserSignIn = async (user, password) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/ldap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      user,
      password
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getLdapConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateLdapConfig = async (token = "", enable_ldap) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      enable_ldap
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getLdapServer = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap/server`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateLdapServer = async (token = "", body) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap/server`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify(body)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const userSignIn = async (email, password) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const userSignUp = async (name, email, password, profile_image_url) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      email,
      password,
      profile_image_url
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const userSignOut = async () => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/signout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  sessionStorage.clear();
  return res;
};
const addUser = async (token, name, email, password, role = "pending", profile_image_url = null) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
      ...profile_image_url && { profile_image_url }
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateUserProfile = async (token, profile) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/update/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...profile
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateUserPassword = async (token, password, newPassword) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/update/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      password,
      new_password: newPassword
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createAPIKey = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/api_key`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res.api_key;
};
const getAPIKey = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/api_key`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res.api_key;
};
export {
  userSignUp as a,
  userSignOut as b,
  addUser as c,
  updateUserPassword as d,
  getAPIKey as e,
  updateUserProfile as f,
  getSessionUser as g,
  createAPIKey as h,
  getAdminDetails as i,
  getAdminConfig as j,
  getLdapServer as k,
  ldapUserSignIn as l,
  getLdapConfig as m,
  updateAdminConfig as n,
  updateLdapConfig as o,
  updateLdapServer as p,
  userSignIn as u
};
