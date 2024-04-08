// src/utils/generate-slug.ts
function generateSlug(text) {
  const slug = text.normalize().replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return slug;
}

export {
  generateSlug
};
