
export function buildGreeting(name) {
  const paragraph = document.createElement('p')
  paragraph.textContent = `Hi ${name} !`
  return paragraph
}