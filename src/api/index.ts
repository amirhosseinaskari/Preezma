export const fetchAPI = async ({
  url,
  method = 'get',
}: {
  url: string
  method?: 'get' | 'post'
}) => {
  const response = await fetch(url, {
    method,
  })

  return response.json()
}
