export const getCurrentDate = () => {
    const currentDate = new Date();
  
    // Get day, month, and year
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
  
    // Return the formatted date
    return `${month}-${day}-${year}`;
  }

  export const buildFileName = (originalPrompt) => {
    const timestamp = new Date().getTime();
    return `${slugify(originalPrompt)}-${timestamp}`
  }
  
  const slugify = (str) => {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word characters (except hyphens)
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
}