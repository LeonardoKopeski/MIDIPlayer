export function log(input: string) {
  const li = document.createElement('li')
  const now = new Date()
  li.textContent = `[${now.toLocaleTimeString()}] ${input}`
  document.getElementById('log')?.appendChild(li)
}