export   async function fetchPost() {
  let urlString =window !== undefined && window.location.search;
console.log(window.location.search);
  let cleanedString = urlString.replace(/^\?name=/, '');

  try {
    const url = `http://localhost:1337/api/blog-posts?filters[slug][$containsi]=${cleanedString}`;
    const response = await fetch(url);
    const { data } = await response.json();
    // Assuming you want the first post if there are multiple
  return data
  } catch (err) {
    console.log(err);
  }
}
