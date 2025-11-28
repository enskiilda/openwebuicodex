import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { g as getTimeRange } from "./Bh-hrM1w.js";
const createNewNote = async (token, note) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...note
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
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
const getNotes = async (token = "", raw = false) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/`, {
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
  if (raw) {
    return res;
  }
  if (!Array.isArray(res)) {
    return {};
  }
  const grouped = {};
  for (const note of res) {
    const timeRange = getTimeRange(note.updated_at / 1e9);
    if (!grouped[timeRange]) {
      grouped[timeRange] = [];
    }
    grouped[timeRange].push({
      ...note,
      timeRange
    });
  }
  return grouped;
};
const getNoteList = async (token = "", page = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (page !== null) {
    searchParams.append("page", `${page}`);
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/list?${searchParams.toString()}`, {
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
const getNoteById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/${id}`, {
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
const updateNoteById = async (token, id, note) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...note
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
const deleteNoteById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/${id}/delete`, {
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
export {
  getNoteList as a,
  getNoteById as b,
  createNewNote as c,
  deleteNoteById as d,
  getNotes as g,
  updateNoteById as u
};
