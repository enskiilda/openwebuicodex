import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
const getConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/config`, {
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
const updateConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/config`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...config
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
const getAllFeedbacks = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedbacks/all`, {
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
const getFeedbackItems = async (token = "", orderBy, direction, page) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (orderBy) searchParams.append("order_by", orderBy);
  if (direction) searchParams.append("direction", direction);
  if (page) searchParams.append("page", page.toString());
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/evaluations/feedbacks/list?${searchParams.toString()}`,
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
const exportAllFeedbacks = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedbacks/all/export`, {
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
const createNewFeedback = async (token, feedback) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...feedback
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
const getFeedbackById = async (token, feedbackId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback/${feedbackId}`, {
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
const updateFeedbackById = async (token, feedbackId, feedback) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback/${feedbackId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...feedback
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
const deleteFeedbackById = async (token, feedbackId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback/${feedbackId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
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
export {
  getFeedbackItems as a,
  getAllFeedbacks as b,
  createNewFeedback as c,
  deleteFeedbackById as d,
  exportAllFeedbacks as e,
  getConfig as f,
  getFeedbackById as g,
  updateConfig as h,
  updateFeedbackById as u
};
