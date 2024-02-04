export const routes = {
  homepage: '/',
  about: '/about',
  article: (articleName) => `/article/${articleName}`,
  contacts: '/contacts',
  services: '/services',
  service: (serviceName) => `/services/${serviceName}`,
  trade: '/trade',
  vacancies: '/vacancies',
}
export default routes
