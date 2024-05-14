// pages/api/check404.js

// Function to analyze HTML content for 404 errors
function analyzeHtmlFor404(html) {
  // Regular expression to find <a> tags with href attributes containing "404"
  const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?404.*?)\1/gi;
  const matches = html.match(regex);
  // Count the number of matches
  return matches ? matches.length : 0;
}

export default async function handler(req, res) {
    const { url } = req.query;
    console.log(res);
    try {
      const response = await fetch(url);
      const html = await response.text();
      // Analyze HTML to count 404 errors (You'll need to implement this logic)
      const errorCount = analyzeHtmlFor404(html);
      console.log(errorCount);
      res.status(200).json({ errorCount });
    } catch (error) {
      console.error('Error fetching website:', error);
      res.status(500).json({ error: 'Error fetching website' });
    }
  }
  