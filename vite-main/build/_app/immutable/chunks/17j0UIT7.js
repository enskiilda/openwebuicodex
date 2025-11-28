import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { g as getTimeRange } from "./Bh-hrM1w.js";
const createNewChat = async (token, chat, folderId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/new`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      chat,
      folder_id: folderId ?? null
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const unarchiveAllChats = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/unarchive/all`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const importChats = async (token, chats) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/import`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      chats
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatList = async (token = "", page = null, include_pinned = false, include_folders = false) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (page !== null) {
    searchParams.append("page", `${page}`);
  }
  if (include_folders) {
    searchParams.append("include_folders", "true");
  }
  if (include_pinned) {
    searchParams.append("include_pinned", "true");
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getChatListByUserId = async (token = "", userId, page = 1, filter) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("page", `${page}`);
  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        searchParams.append(key, value.toString());
      }
    });
  }
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/chats/list/user/${userId}?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...token && { authorization: `Bearer ${token}` }
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getArchivedChatList = async (token = "", page = 1, filter) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("page", `${page}`);
  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        searchParams.append(key, value.toString());
      }
    });
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/archived?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getAllChats = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/all`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatListBySearchText = async (token, text, page = 1) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("text", text);
  searchParams.append("page", `${page}`);
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/search?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getChatsByFolderId = async (token, folderId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/folder/${folderId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatListByFolderId = async (token, folderId, page = 1) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (page !== null) {
    searchParams.append("page", `${page}`);
  }
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/chats/folder/${folderId}/list?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...token && { authorization: `Bearer ${token}` }
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getAllArchivedChats = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/all/archived`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getAllUserChats = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/all/db`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getAllTags = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/all/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPinnedChatList = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/pinned`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res.map((chat) => ({
    ...chat,
    time_range: getTimeRange(chat.updated_at)
  }));
};
const getChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const getChatByShareId = async (token, share_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/share/${share_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getChatPinnedStatusById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/pinned`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const toggleChatPinnedStatusById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/pin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const cloneChatById = async (token, id, title) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/clone`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...title && { title }
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const cloneSharedChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/clone/shared`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const shareChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/share`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateChatFolderIdById = async (token, id, folderId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/folder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      folder_id: folderId
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const archiveChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/archive`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteSharedChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/share`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateChatById = async (token, id, chat) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      chat
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteChatById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const getTagsById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const addTagById = async (token, id, tagName) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/tags`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      name: tagName
    })
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
const deleteTagById = async (token, id, tagName) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/${id}/tags`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      name: tagName
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteAllChats = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const archiveAllChats = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/chats/archive/all`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
export {
  getChatListBySearchText as A,
  getAllChats as B,
  archiveAllChats as C,
  deleteAllChats as D,
  getAllUserChats as E,
  getChatById as a,
  deleteSharedChatById as b,
  cloneSharedChatById as c,
  deleteChatById as d,
  getChatListByUserId as e,
  getChatList as f,
  getChatByShareId as g,
  getTagsById as h,
  addTagById as i,
  getAllTags as j,
  deleteTagById as k,
  getChatListByFolderId as l,
  getChatsByFolderId as m,
  createNewChat as n,
  updateChatFolderIdById as o,
  getPinnedChatList as p,
  getArchivedChatList as q,
  getAllArchivedChats as r,
  shareChatById as s,
  archiveChatById as t,
  updateChatById as u,
  unarchiveAllChats as v,
  toggleChatPinnedStatusById as w,
  getChatPinnedStatusById as x,
  cloneChatById as y,
  importChats as z
};
