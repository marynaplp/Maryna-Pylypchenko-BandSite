class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }
  async postComment(comment) {
    try {
      console.log("Posting comment:", comment);
      console.log(
        "Request URL:",
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const response = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );
      return response;
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const comments = response.data;
      comments.sort((a, b) => {
        new Date(b.timestamp) - new Date(a.timestamp);
      });
      return comments;
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      const shows = response.data.map((show) => ({
        date: new Date(show.date).toDateString(),
        venue: show.place,
        location: show.location,
      }));

      return shows;
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  }
}

export default BandSiteApi;
