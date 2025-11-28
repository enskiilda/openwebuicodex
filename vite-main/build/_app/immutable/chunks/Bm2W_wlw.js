import { b as WEBUI_BASE_URL, c as OPENAI_API_BASE_URL } from "./DQ9UxF7k.js";
const getOpenAIConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${OPENAI_API_BASE_URL}/config`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateOpenAIConfig = async (token = "", config) => {
  let error = null;
  const res = await fetch(`${OPENAI_API_BASE_URL}/config/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...config
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getOpenAIModelsDirect = async (url, key) => {
  let error = null;
  const res = await fetch(`${url}/models`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...key && { authorization: `Bearer ${key}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    var _a;
    error = `OpenAI: ${((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) ?? "Network Problem"}`;
    return [];
  });
  if (error) {
    throw error;
  }
  return res;
};
const getOpenAIModels = async (token, urlIdx) => {
  let error = null;
  const res = await fetch(
    `${OPENAI_API_BASE_URL}/models${typeof urlIdx === "number" ? `/${urlIdx}` : ""}`,
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
  }).catch((err) => {
    var _a;
    error = `OpenAI: ${((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) ?? "Network Problem"}`;
    return [];
  });
  if (error) {
    throw error;
  }
  return res;
};
const verifyOpenAIConnection = async (token = "", connection = {}, direct = false) => {
  const { url, key, config } = connection;
  if (!url) {
    throw "OpenAI: URL is required";
  }
  let error = null;
  let res = null;
  if (direct) {
    res = await fetch(`${url}/models`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json"
      }
    }).then(async (res2) => {
      if (!res2.ok) throw await res2.json();
      return res2.json();
    }).catch((err) => {
      var _a;
      error = `OpenAI: ${((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) ?? "Network Problem"}`;
      return [];
    });
    if (error) {
      throw error;
    }
  } else {
    res = await fetch(`${OPENAI_API_BASE_URL}/verify`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url,
        key,
        config
      })
    }).then(async (res2) => {
      if (!res2.ok) throw await res2.json();
      return res2.json();
    }).catch((err) => {
      var _a;
      error = `OpenAI: ${((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) ?? "Network Problem"}`;
      return [];
    });
    if (error) {
      throw error;
    }
  }
  return res;
};
const chatCompletion = async (token = "", body, url = `${WEBUI_BASE_URL}/api`) => {
  const controller = new AbortController();
  let error = null;
  const res = await fetch(`${url}/chat/completions`, {
    signal: controller.signal,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).catch((err) => {
    console.error(err);
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return [res, controller];
};
const generateOpenAIChatCompletion = async (token = "", body, url = `${WEBUI_BASE_URL}/api`) => {
  let error = null;
  const res = await fetch(`${url}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(body)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = (err == null ? void 0 : err.detail) ?? err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  getOpenAIModelsDirect as a,
  getOpenAIConfig as b,
  chatCompletion as c,
  getOpenAIModels as d,
  generateOpenAIChatCompletion as g,
  updateOpenAIConfig as u,
  verifyOpenAIConnection as v
};
