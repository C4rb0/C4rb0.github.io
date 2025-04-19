const BASE_PATH = '/writeups';

export const loadOrgWriteups = async (org) => {
  const response = await fetch(`${BASE_PATH}/${org}/list.json`);
  return response.json();
};

export const loadWriteupContent = async (org, slug) => {
  const response = await fetch(`${BASE_PATH}/${org}/${slug}.md`);
  return response.text();
};