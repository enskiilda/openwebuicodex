import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
const createNewChannel = async (token = "", channel) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/channels/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...channel })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChannels = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/channels/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChannelById = async (token = "", channel_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/channels/${channel_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChannelUsersById = async (token, channel_id, query, orderBy, direction, page = 1) => {
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
  res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/users?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
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
const updateChannelById = async (token = "", channel_id, channel) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/channels/${channel_id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...channel })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteChannelById = async (token = "", channel_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/channels/${channel_id}/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChannelMessages = async (token = "", channel_id, skip = 0, limit = 50) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/messages?skip=${skip}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChannelThreadMessages = async (token = "", channel_id, message_id, skip = 0, limit = 50) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/messages/${message_id}/thread?skip=${skip}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const sendMessage = async (token = "", channel_id, message) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/channels/${channel_id}/messages/post`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...message })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateMessage = async (token = "", channel_id, message_id, message) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/messages/${message_id}/update`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...message })
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const addReaction = async (token = "", channel_id, message_id, name) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/messages/${message_id}/reactions/add`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name })
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const removeReaction = async (token = "", channel_id, message_id, name) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/messages/${message_id}/reactions/remove`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name })
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteMessage = async (token = "", channel_id, message_id) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/channels/${channel_id}/messages/${message_id}/delete`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  addReaction as a,
  getChannelThreadMessages as b,
  getChannelMessages as c,
  deleteMessage as d,
  getChannelById as e,
  deleteChannelById as f,
  getChannelUsersById as g,
  updateChannelById as h,
  createNewChannel as i,
  getChannels as j,
  removeReaction as r,
  sendMessage as s,
  updateMessage as u
};
