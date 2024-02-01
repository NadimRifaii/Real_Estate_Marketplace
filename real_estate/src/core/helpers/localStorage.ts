const local = (key: string, value?: any) => {
  if (value) {
    localStorage.setItem(key, value)
  } else {
    return localStorage.getItem(key)
  }
}
export default local