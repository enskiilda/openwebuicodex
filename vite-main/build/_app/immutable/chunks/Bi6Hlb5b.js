import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { a as getUserPosition } from "./Bh-hrM1w.js";
const getUserDefaultPermissions = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/default/permissions`, {
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
const updateUserDefaultPermissions = async (token, permissions) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/default/permissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...permissions
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
const getUsers = async (token, query, orderBy, direction, page = 1) => {
  let error = null;
  let res = null;
  const searchParams = new URLSearchParams();
  searchParams.set("page", `${page}`);
  if (query) {
    searchParams.set("query", query);
  }
  if (orderBy) {
    searchParams.set("order_by", orderBy);
  }
  if (direction) {
    searchParams.set("direction", direction);
  }
  res = await fetch(`${WEBUI_API_BASE_URL}/users/?${searchParams.toString()}`, {
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
const getAllUsers = async (token) => {
  let error = null;
  let res = null;
  res = await fetch(`${WEBUI_API_BASE_URL}/users/all`, {
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
const searchUsers = async (token, query) => {
  let error = null;
  let res = null;
  res = await fetch(`${WEBUI_API_BASE_URL}/users/search?query=${encodeURIComponent(query)}`, {
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
const getUserSettings = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/user/settings`, {
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
const updateUserSettings = async (token, settings) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/user/settings/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...settings
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
const getUserById = async (token, userId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/${userId}`, {
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
const updateUserInfo = async (token, info) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/user/info/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...info
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
const getAndUpdateUserLocation = async (token) => {
  const location = await getUserPosition().catch((err) => {
    console.error(err);
    return null;
  });
  if (location) {
    await updateUserInfo(token, { location });
    return location;
  } else {
    console.info("Failed to get user location");
    return null;
  }
};
const deleteUserById = async (token, userId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/${userId}`, {
    method: "DELETE",
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
const updateUserById = async (token, userId, user) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/${userId}/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      profile_image_url: user.profile_image_url,
      role: user.role,
      email: user.email,
      name: user.name,
      password: user.password !== "" ? user.password : void 0
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
const getUserGroupsById = async (token, userId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/users/${userId}/groups`, {
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
export {
  getUserById as a,
  getUserGroupsById as b,
  getUsers as c,
  deleteUserById as d,
  getUserDefaultPermissions as e,
  updateUserDefaultPermissions as f,
  getUserSettings as g,
  updateUserSettings as h,
  getAndUpdateUserLocation as i,
  updateUserInfo as j,
  getAllUsers as k,
  searchUsers as s,
  updateUserById as u
};
