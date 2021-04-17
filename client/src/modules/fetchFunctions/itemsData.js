import axios from "axios";
import Config from "../../../config";

const { apiURL } = Config.URL;

const { ItemsResultsLimitByDefault } = Config.APP;

const fetchGetAllCategories = async () => {
  const path = Config.ROUTES.CATEGORIES.GET_AllCategories;

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `Error status: ${response.status}. There was a problem fetching data.`
  );
};

const fetchGetImage = async (imageId) => {
  const path = Config.ROUTES.CATEGORIES.GET_Image(imageId);

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  if (response.ok) {
    return await response.blob();
  }

  throw new Error(
    `Error status: ${response.status}. There was a problem fetching data.`
  );
};

const fetchGetManyImages = async (ids) => {
  const query = {
    filter: JSON.stringify({ ids }),
  };

  const qs = new URLSearchParams(query).toString();

  const path = Config.ROUTES.CATEGORIES.GET_Many_Images(qs);

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `Error status: ${response.status}. There was a problem fetching data.`
  );
};

const fetchGetAllSubCategories = async () => {
  const path = Config.ROUTES.CATEGORIES.GET_AllSubcategories();

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };
  const response = await fetch(apiURL + path, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `Error status: ${response.status}. There was a problem fetching data.`
  );
};

const fetchGetAllSubCategoriesByCategoryId = async (categoryId) => {
  const path = Config.ROUTES.CATEGORIES.GET_Subcategories(categoryId);

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `Error status: ${response.status}. There was a problem fetching data.`
  );
};

const fetchGetDealsItems = async () => {
  let path = Config.ROUTES.ITEMS.GET_ItemSpecials();

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  const response2 = await response.json();

  const specialsObj = response2.data.specials[0];

  const { dealOfTheDayItems: dealsItems } = specialsObj;

  const query = {
    filter: JSON.stringify({
      ids: dealsItems,
    }),
  };

  const qs = new URLSearchParams(query).toString();

  path = Config.ROUTES.ITEMS.GET_Many_Items(qs);

  const response3 = await fetch(apiURL + path, options);

  if (response3.ok) {
    return await response3.json();
  }

  throw new Error(
    `Error status: ${response3.status}. There was a problem fetching data.`
  );
};

const fetchGetSeasonItems = async () => {
  let path = Config.ROUTES.ITEMS.GET_ItemSpecials();

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  const response2 = await response.json();

  const specialsObj = response2.data.specials[0];

  const { seasonDealItems: seasonItems } = specialsObj;

  const query = {
    filter: JSON.stringify({
      ids: seasonItems,
    }),
  };

  const qs = new URLSearchParams(query).toString();

  path = Config.ROUTES.ITEMS.GET_Many_Items(qs);

  const response3 = await fetch(apiURL + path, options);

  if (response3.ok) {
    return await response3.json();
  }

  throw new Error(
    `Error status: ${response3.status}. There was a problem fetching data.`
  );
};

const fetchGetSelectedItem = async (itemId) => {
  const path = Config.ROUTES.ITEMS.GET_ItemById(itemId);

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  const response = await fetch(apiURL + path, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `Error status: ${response.status}. There was a problem fetching data.`
  );
};

const fetchGetItemsByFilter = async (filter, page, sort) => {
  const limit = ItemsResultsLimitByDefault;

  const path = Config.ROUTES.ITEMS.GET_ItemsByFilter(filter, page, limit, sort);

  const options = {
    url: apiURL + path,
    method: "GET",

    responseType: "json",
    withCredentials: false,
  };

  return await axios(options);
};

export {
  fetchGetAllCategories,
  fetchGetAllSubCategoriesByCategoryId,
  fetchGetAllSubCategories,
  fetchGetImage,
  fetchGetManyImages,
  fetchGetDealsItems,
  fetchGetSeasonItems,
  fetchGetSelectedItem,
  fetchGetItemsByFilter,
};
