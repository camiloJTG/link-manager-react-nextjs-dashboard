const API = process.env.NEXT_PUBLIC_LINK_API_URL_BASE;

export const apiConfig = {
   auth: {
      register: `${API}/user/register`,
      login: `${API}/auth/login`
   },
   link: {
      create: `${API}/link`,
      listLink: `${API}/link/user`,
      deleteLink: `${API}/link`,
      getLink: `${API}/link`,
      updateLink: `${API}/link`
   }
};
