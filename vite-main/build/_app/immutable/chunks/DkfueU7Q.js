import { a as WEBUI_API_BASE_URL, b as WEBUI_BASE_URL } from "./DQ9UxF7k.js";
const importConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/import`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      config
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
const exportConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/export`, {
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
const getConnectionsConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/connections`, {
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
const setConnectionsConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/connections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...config
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
const getToolServerConnections = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/tool_servers`, {
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
const setToolServerConnections = async (token, connections) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/tool_servers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...connections
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
const verifyToolServerConnection = async (token, connection) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/tool_servers/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...connection
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
const registerOAuthClient = async (token, formData, type = null) => {
  let error = null;
  const searchParams = type ? `?type=${type}` : "";
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/oauth/clients/register${searchParams}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...formData
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
const getOAuthClientAuthorizationUrl = (clientId, type = null) => {
  const oauthClientId = type ? `${type}:${clientId}` : clientId;
  return `${WEBUI_BASE_URL}/oauth/clients/${oauthClientId}/authorize`;
};
const getCodeExecutionConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/code_execution`, {
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
const setCodeExecutionConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/code_execution`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...config
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
const getModelsConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/models`, {
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
const setModelsConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/models`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...config
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
const setDefaultPromptSuggestions = async (token, promptSuggestions) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/suggestions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      suggestions: promptSuggestions
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
const getBanners = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/banners`, {
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
const setBanners = async (token, banners) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/banners`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      banners
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
export {
  getBanners as a,
  setBanners as b,
  getModelsConfig as c,
  setModelsConfig as d,
  exportConfig as e,
  getConnectionsConfig as f,
  getOAuthClientAuthorizationUrl as g,
  setConnectionsConfig as h,
  importConfig as i,
  getCodeExecutionConfig as j,
  setCodeExecutionConfig as k,
  getToolServerConnections as l,
  setToolServerConnections as m,
  registerOAuthClient as r,
  setDefaultPromptSuggestions as s,
  verifyToolServerConnection as v
};
