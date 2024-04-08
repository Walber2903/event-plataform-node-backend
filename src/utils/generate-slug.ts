export function generateSlug(text: string): string {
  const slug = text
    .normalize()
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase() // Convert text to lowercase
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes

  return slug;
}